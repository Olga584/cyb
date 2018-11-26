import React, { Component } from 'react';
import { connect } from 'react-redux';
import web3 from 'web3';
import ConfirmationPopup, { TxDetailsContainer } from '../../components/ConfirmationPopup/ConfirmationPopup';
import { approve, reject } from '../../redux/wallet';
import Input from '../../components/Input/Input';

class ConfirmationPopupContainer extends Component {
    approve = () => {
        const gasLimit = this.gasLimit.value;
        const gasPrice = this.gasPrice.value;

        this.props.approve(gasLimit, gasPrice);
    };

    reject = () => {
        this.props.reject();
    };

    render() {
        const {
            pendingRequest,
            request,
            defaultAccountBalance,
            lastTransactionId
        } = this.props;

        const utils = web3.utils;

        let _from;
        let _to;
        let _gasLimit = 0;
        let _gasPrice;
        let _gasPriceGwei;
        let _amount;
        let totalAmount;
        let value = 0;

        if (request) {
            try {
                value = request.params[0].value || 0;
                _from = request.params[0].from;
                _to = request.params[0].to;
                if (request.params[0].gas) {
                    _gasLimit = utils.hexToNumber(request.params[0].gas);
                }
                _gasPrice = utils.hexToNumber(request.params[0].gasPrice);
                _gasPriceGwei = utils.fromWei(`${_gasPrice}`, 'Gwei');
                _amount = value ? utils.fromWei(value, 'ether') : 0;
                totalAmount = utils
                    .toBN(_gasPrice)
                    .mul(utils.toBN(_gasLimit))
                    .add(utils.toBN(value));
                totalAmount = utils.fromWei(totalAmount, 'ether');
            } catch (e) {
                console.log('Something wrong on total amount calculating');
            }
        }

        return (
            <div>
                {pendingRequest
                && (
                    <ConfirmationPopup
                        from={ _from }
                        to={ _to }
                        totalAmount={ totalAmount }
                        accountBalance={ defaultAccountBalance }
                        insufficientFunds={ totalAmount > defaultAccountBalance }
                        approveCallback={ this.approve }
                        rejectCallback={ this.reject }
                        txHash={ lastTransactionId }
                        content={ (
                            <TxDetailsContainer>
                                <span>
                                    <div className='popup-label'>Amount (ETH):</div>
                                    <Input
                                        defaultValue={ _amount }
                                        inputRef={ (node) => {
                                            this.ethAmount = node;
                                        } }
                                        style={ { width: 100 } }
                                        disabled
                                    />
                                </span>
                                <span>
                                    <div className='popup-label'>Gas price (GWEI):</div>
                                    <Input
                                        defaultValue={ _gasPriceGwei }
                                        inputRef={ (node) => {
                                            this.gasPrice = node;
                                        } }
                                        style={ { width: 100 } }
                                    />
                                </span>
                                <span>
                                    <div className='popup-label'>Gas limit:</div>
                                    <Input
                                        defaultValue={ _gasLimit }
                                        inputRef={ (node) => {
                                            this.gasLimit = node;
                                        } }
                                        style={ { width: 100 } }
                                    />
                                </span>
                            </TxDetailsContainer>
                        ) }
                    />
                )
                }
            </div>
        );
    }
}

export default connect(
    state => ({
        pendingRequest: state.wallet.pendingRequest,
        request: state.wallet.request,
        lastTransactionId: state.wallet.lastTransactionId,
        defaultAccountBalance: state.wallet.defaultAccountBalance,
    }),
    {
        approve,
        reject,
    },
)(ConfirmationPopupContainer);
