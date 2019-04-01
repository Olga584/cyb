# Cyb: personal immortal new web robot

@xhipster @asadovka

Concept paper.
Definitions are in development.
Contributions and critics are highly welcome.

[Current implementation](https://github.com/cybercongress/cyb) and [design layouts](https://github.com/cybercongress/ui.cyb) are not fully covered by documentation yet.


## Introduction

The new web, or [web3](https://github.com/cybercongress/cyb/blob/master/docs/web3-vision.md) software is one of the most relevant things developing now.
Leading role in this story belongs to browsers. We see different [approaches](https://github.com/cybercongress/cyb/blob/master/docs/comparison.md) to deliver such experience, but none of them looks completed and convenient.
So we decide to bring our vision of the future software, called Cyb, that follows new principles, defined by ourselves.


## Who is Cyb?

We think web3 browser should be more than passive boring piece of code.
And here helps our first principle - anthropomorphism.


**Cyb is a friendly personal immortal software robot who helps you explore the universes.**

The main mission of Cyb is to free developers, designers and simple users from outdated things from web2 such as HTML, V8, DNS and IP.
In new web every user can get such robot for free.
At the very beginning Cyb is focusing on developers and advanced blockchain users who are able to work with private keys and transactions.
But Cyb can also be friendly for everyone who wants to interact with consensus computers.
With help of Cyb developers can use any markup, execution and rendering engine they wish, they can easily develop any app and share it with others.
Designers can bring new life in established UI and UX paradigms, implement Zooming UI or [Gravity Design System]().
Simple users can get access to the knowledge and own funds without restrictions and censorship.


## Cyb anatomy

We can imagine Cyb as  a living organism with certain anatomy: skeleton, internal organs and skin.
Such concept follows follows [web3 architecture](https://github.com/w3f/Web3-wiki/wiki#web-3-tech-stack) with some additions and modifications:


- Skeleton: low level interaction, web3 providers: consensus machines (Ethereum, Cyber) decentralized file storage (Filecoin) and content addressing mechanism (IPFS, DAT)
- Internal organs: application level, Cyb provides own app (like brain and nervous system) and a set of necessary apps for complete web3 experience
- Skin: shell, UI representations (can be different according to devices and interfaces, but all of them provide original functionality)

We will start from skin, gradually describing each level step by step. First concepts will be easy to understand, but the deeper we dive the harder the information will be.


## Skin. UI Representation

Cyb can take different visual forms, but all functions are available on both low and high level platforms:

- CLI. Basic command interactions, no GUI. Simple, fast and cross-platform.
- Desktop. Basic UI version. Better UX than in CLI, cross-platform.
- Mobile. Adaptive UI. Same UX as on Desktop.
- Web. Autonomous existing Cyb, available by demand.
- VR. Full deep, web3 UX. Gravity UI.
- Hardware. Different variation of robots.
- Neuro UI. Cyb and you are in the unified process, UI is unlimited =)

Cyb supports several ways to interact with him, such as:

- keyboard
- mouse/touchpad
- voice
- camera
- neuro impulses

These concepts are massive, that is why currently we don't focus on implementation of all mentioned things.
Only desktop [version](https://github.com/cybercongress/cyb/releases) is developing now.
But this paper will try to show implementation agnostic concepts of Cyb that are simple enough to be adopted by web3 developers.


### Cyb Shell

Cyb shell a set of main [UI elements](https://github.com/cybercongress/ui.cyb/blob/graphics/gravity.sketch) that integrates all necessary function for quick access.
Think of it as a face of Cyb:

- `Navigation Bar` - search field, back & forward buttons, pin button
- `App Bar` - list of pinned favorite cyberlinks
- `Timeline Bar` - main identity data, user event history
- `Action Bar` - set of main function of certain page

```
<Gravity max picture>
```

These concepts will be described in details below.


### Navigation Bar

Navigation bar in Cyb is based on the following elements:

- back button - returns user to the previous state of web3 app
- search field - provides direct access to certain state
- Earth button - allow users to pin cyberlinks
- forward button - brings user to the future state based on Cyb prediction
- connection status - shows web3 connection status
- user id icon - shows current active id

Search field is used to browse web3.
With the help of DURA and knowledge of application involved (<content-address>.<app>) it can get content across different content addressing protocols such as IPFS, DAT, SWARM, and inside blockchains, tangles and DAGs thus forming heterogeneous environment of web3.

In [web3 vision doc](cyb/docs/web3-vision.md) we describe in details a concept of web3 browsing based on DURA specs.
So, in web3 appending "dot" works different in comparison with web2.
Dot is literally a search query to a particular app that also has a content address in heterogeneous network.
All symbols after "dot" make a map with content address of a domain in [Chaingear](https://github.com/cybercongress/chaingear), and all data before "dot" is a query parameter to an app.

For example:

`.cyb` query will open Cyb main app. `id.cyb` will open `id` page in the `.cyb` app.
Query without "dot" will be automatically redirected to search in cyber knowledge graph (Note: queries without dot is synonym to `<your-query>.cyber`).

Empty query always leads to the `.cyb` .


### App Bar

App bar is a place where user can quickly get access to pinned web3 objects.
User can pin such objects by clicking on button "Earth" on navigation bar and then it will appear in app bar.
Cyberlink manager "files.cyb" is an attached page that allow agents to group and tag pins, as well as import and export them.


### Timeline bar

Purpose of timeline bar is to enable the concept of identity and its state during time:

- past: a user can see previous state: all his transactions, events , navigation history
- present: current token balance
- future: scheduled or delayed transactions, balance estimation

Timeline also provides quick access to main Cyb pages.


### Action Bar

Cyb saves user's time and as a result every page or app has only several main functions: add item, edit fields and etc.
These functions are implemented in external panel at the bottom of the page.



## Internal organs. Applications


Apps in web3 are just simply IPFS hashes. Some of them can represent static content, others are dynamic and interactive.
According to [DURA scheme](https://github.com/cybercongress/cyb/blob/master/docs/web3-vision.md#dura-scheme) apps are available by typing "pagename.appname" in search field of Cyb.  
Main browser app is accessible by typing ".cyb" and has modules (pages):

- `.cyb`: main page with relevant user content
- `id.cyb`: user identity and balances
- `shield.cyb`: encryption interface
- `keys.cyb`: keystore interface
- `state.cyb`: user state sync, import and export

- `timeline.cyb`: user's activity (transactions, navigation history)
- `files.cyb`: pinned files explorer (cyberlinks, files, syncing content - Chaingear domains snapshots)
- `connect.cyb`: web3 providers connection manager

- `dev.cyb`: web3 development tool with support of smart contracts

- `sign.cyb`: phishing resistant signer for messages and transactions with scheduler
- `access.cyb`: permission manager that respects agents' resources
- `knowledge.cyb`: Сyb community knowledge base, web3 blog, help articles
- `source.cyb`: Сyb source code

Main core apps for initial web3 experience are:

- `.cyber`: cyberd node manager and app for link chains
- `.ipfs`: ipfs node manager and agent experience
- `.eth`: ethereum node manager + ens resolver
- `.chaingear`: Ethereum database manager
- `.dragons`: Dragonereium game
- `.wiki`: wikipedia indexator

To make web3 experience more fascinating we use second principle - gamification.
Cyb uses achievement system to stimulate a user to interact with web3 content and another web3 agents.
These apps, pages and achievements will be described in details below.


### .cyb

Achievement: **Soul**

Given when a user decides to dive into the web3 world.

Grades:

- Enlightened new web user


Purpose of the `.cyb` page is to make agent happier in a moment it returns for surfing.
Main page of the browser contains of 2 parts:

- the most relevant web3 content for a particular user.
- related content, based on user's behavior.


### id.cyb

Achievement: **Body**

Given when a user generates an identity -  a pair of ETH and CYB cryptoaddresses.

Grades:

- Observer. Has no CYB and ETH tokens.
- Worker. Has only ETH tokens.
- Traveler. Has only CYB tokens.
- Pioneer. Has CYB and ETH tokens.


Using identity an agent is able to authenticate messages and sign transactions in web3.
Cyb assumes that an agent which interacts with web3 is using active identity, but offers ability to change id of a signed transaction during signing.

Agent understand which id is active using identicon.
Cyb computes unique and deterministic identicons for every id using master private key, generated from mnemonic phrase.


### keys.cyb

Achievement: **Immortality**

Given when a user backups a mnemonic phrase.

Grades:

- Master of Keys


This app allows to store cryptographic secrets.
Think of it as lastpass you don't need to trust that is able to compute different addresses, one time passwords and signatures in the context of an app.

The following convention is used for `keys.cyb`:

```
id: String,
chainId: Number
keystore: Promise <String>
mnemonic: String
derivationPath?: Promise <String>
otherAddresses: Array <String>
privateKey: String
publicKey: Promise <String>
type: String
subtype: String
```

The following API is being used to programmatically interact with navigation bar:

```
setDefaultId(addressIndex: Number): Promise <Boolean>
sign(transactionObject: Object): Promise <String>
signMessage(messageObject: Object): Promise <String>
verifyMessage(verificationObject: Object): Promise <Boolean>
```


### shield.cyb

Achievement: **Shield**

Given when a user creates a password and encrypts mnemonic phrase.

Grades:

- Defended identity

Password is used to encrypt mnemonic and state of a user.


### connect.cyb

Achievement: **Oracle**

Given when a user establishes a connection to web3 providers.

Grades:

- First words. Used default remote connections.
- Advanced communication. Used custom remote connections.
- Voice inside. All connections are local.

In web3 world all data has the state, so it become easier to navigate through it and make agent experience better.
To be sure that you are working with actual state Cyb needs to manage connection to web3 providers.

Our purpose is to build web3 browser that is agnostic from addressing, identity and consensus protocols.
But currently we use IPFS, Ethereum and Cyberd nodes to show off possible experience at early stage of web3 development.
It is not necessary to connect to own web3 providers for basic needs such as popular static content surfing and simple transfers of tokens.

Ultimate purpose of `connect.cyb` is to remove necessity of agents to manually switch between networks.
It is a goal of app developers and browser vendors to define an approach that allows seamless interaction during web3 experience with all network magic, which happenes underneath.
Cyb is developing in a way which allows async interactions with several peer-to-peer networks in an app context.


Cyb is hiding all complexities of web3 connections under one colorful indicator that range from green to red and is placed in the eye of robot in the upper left corner .
Such connection indicator is cyberlinked to a `connect.cyb` app.


### files.cyb


Achievement: **Collection**

Given when a user adds DURA bookmarks or pins IPFS content.

Grades:

- Root. Used default root domains.
- Antiquarian. When first pin or file is added.
- Contributor. When files are added through local IPFS node.

`files.cyb` is a decentralized file manager. It can work with IPFS hashes: locally pinned files, syncing Chaingear content.
A user can add files or bookmarks and share them with web3 world.


### timeline.cyb

Achievement: **Map**

Given when a user makes first several transitions with DURA or several transactions.

Grades:

- Historian. Only DURA transition history.
- Diplomat. DURA and transaction history.


### state.cyb

Achievement: **Heritage**

Given when a user accumulates some data in files.cyb, timeline.cyb or connect.cyb.

Grades:

- Preservation of traditions


### knowledge.cyb

Achievement: **Wisdom**

Given when a user finds a congress wiki page.

Grades:

- Sharing knowledge

Knowledge page contains project documentation, help articles and web3 blog.


## sign.cyb

`sign.cyb` allows users to sign messages and transactions in a way that brings web3 experience to the whole new level.

Cyb usee embedded instrument for signing transactions so user can be always sure that transaction details are valid.
In a web2 there is no inherent mechanism to be sure that overlay of an app is produced by a browser and not an app itself.
Cyb solves this problem deterministically generating background and sound of overlay window in a way that an underlying app cannot know the seed for generating desired sound and visual pattern.
The user needs to remember its unique pattern once to safely interacting with different apps including not so trusted.

Another problem we are approach to solve with `sign.cyb` is delayed transactions.
Cyb has its own address for which an agent can delegate some rights.
Using this API app developer can create a logic that allow create and execute complex sequences of transactions client side.
Since inception of Ethereum we sign thousands of transactions and miss even more.
That is why we believe this feature is critical for awesome web3 experience.


### .dev

Developers experience is critical for the whole web3 adoption.
This app helps to develop and publish web3 apps.


### feed.cyb

1. what is web3 feed
2. subscription on events
3. import/export/sharing
4. privacy


### access.cyb

Permission management is important the process of safe application distribution.
We want to improve upon 3 critical aspects of permission management in web:

- app authentication
- resource management
- dynamic permissions

*App authentication* is currently hard in web2.
Users need somehow know the origin and this is practically hard in a face of government level adversaries, than they should compute hash of received file and compare it with a file hash received from origin.
Due to practical complexity nobody do that. In web3 if you know that address is correct authentication is done automagically.
That is why Cyb can easily verify that permission is granted for expected app and not malicious.

*Resource management* was not in place.
In web2 all permission systems was primarily build around a concept of granting access to a particular data which browser has access to.
While this approach find itself useful it just not enough to run any application from untrusted developers.
Computing resources has fundamental value now, thus must be carefully managed and metered.
In web3 is weird that any untrusted app can eat all resources of a machine in no time.
Moreover, if an application is executed in a sandbox all we need to feel ourselves safe (in addition to authenticated permissions) is ensure that app do not eat more resources than expected.
Libraries that help app developers to mine some proof-of-work algorithms using visitor machine become ubiquitous.
Practically that means that in addition to shity ads web2 users will experience even more worse web experience: greedy, slow and battery consuming apps are coming.
The answer to this upcoming problem in a browser permission system which is able to produce bounds on apps consumption of fundamental resources such as cpu, gpu, ram, storage and broadband.
We believe that resource management must be in the core of web3 application engine.
We are currently doing research on how that can be implemented: containerisation seems to be low hanging fruit that can be embedded right into web experience.

*Permission affordances*.
Current permission systems are static in a sense that browser provide limited set of predefined apis.
Cookies, location, camera, microphone, sound and notifications: that is very limited set of things browsers can afford.
Permissions of a third party developers are not native for a browsers either.
Browser just don't care about what data with which apps agent want to share.
We ask ourselves what if a browser can ask apps what kind of permissions they can provide thus exposing this permission system to any other apps?
We believe this approach will allow web3 developers provide experience inaccessible for previous architectures.




## .cyber

It happens then agent knows some content address but have no idea in which network it can be retrieved as well as what app can deal with it.
That is why Cyb has default integration with cyber [CYBER] protocol.
Cyb append `.cyber` app for all request without a dot. `.cyber` is an app that has simple interface to cyberd, which returns prediction of related cyberlinks thus agent can get required resource directly through peer-to-peer network.
Cyb has a setting of default search engine, thus an agent can plug a search she wants.

```
<api-definition>
```


## .ipfs

This app is a third party app developed by IPFS Shipyard.
This is very basic app for interacting with ipfs.

## .eth

Simple app which ger DURI requests and route requests to ethereum node (contracts, transactions and blocks).
Else resolve ENS.

## .chaingear

[Chaingear](https://github.com/cybercongress/chaingear) is an app that help developers create ethereum based CRUD databases.
We believe it will help developers to adopt web3 easier the same they MySQL helped to site developers in the very beginning of web.


According to [3 rules of root registry](https://github.com/cybercongress/cyb/blob/master/docs/web3-vision.md#three-rules-of-a-root-registry) every developer can deliver best possible experience for their agents.
That is why we want to mix the best from every word in our worlds in our implementation of root registry.
To bring better user experience about 3k of records will be cybersquatted to align interests of existing app developers and agents who look for a beautiful, simple and trustful experience.

Folder `/root` is a mix of the most well known concepts consolidated under one namespace!
Let me introduce what is included in the shake:

- [programming languages](https://gist.github.com/aymen-mouelhi/82c93fbcd25f091f2c13faa5e0d61760): up to 200 names
- [common programs](https://fileinfo.com/filetypes/common): up to 100 names
- [tokens](https://coinmarketcap.com/): Up to 1k names
- [top-level domains](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains): up to 300 names
- [top english words](https://github.com/first20hours/google-10000-english/blob/master/google-10000-english-no-swears.txt): up to 1k names
- [utf symbols](https://www.compart.com/en/unicode/category/So): up to 300 names

Initially cyber•Congress will own all this cybersquatted records.
In order to improve probability of adoption of `root.cyb` cyber•Congres will distribute this names to original app developers based on proof of dns mechanism.
That is, names for programming languages, common programs, tokens and top-level domains will be distributed based on a proof of dns according to verified registry produced by cyber•Congress.

Top english words and utf symbols will be distributed using competitions, grants and awards produced by cyber•Congress.

Initially unregistered names in `root.cyb` will be distributed under flat fee for cyb root registry owner in Chaingear.
We are going to start from 1 ETH for every name and will see will it be enough to protect from abusive squatting or not.
It is possible that we will switch to auction form of distribution in a future.





As an open source project we are welcome for contributions.
Gitcoin is an excellent instrument that we use for delegating tasks for community a processing payments for completed ones.


We use user's feedback to make products better.
So we provide options for bug reporting and feedback leaving on every page.


We have our vision of how to develop browser and what kind of features develop first.
But we give an opportunity for community to decide and vote with tokens what kind of browser we need to see in near future. Our product [Chaingear](https://github.com/cybercongress/chaingear) is also made for this.


## Skeleton. Low level providers



- IPFS
- Ethereum
- Cyber












## Saga on privacy and anonymity

...

## On censorship resistance

...
## First launch
