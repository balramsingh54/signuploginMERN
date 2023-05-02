# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


https://www.youtube.com/watch?v=kwFwN1M0M98&list=PLRKyZvuMYSIPFWe4ruCd7r9BozthKyXHB
https://www.youtube.com/watch?v=63wlDlX334w&list=PLUVqY59GNZQPDMYeta4Rq1hoUeilmSvda

STATUS are below
res.status(200) OK
res.status(201) date created
res.status(400) Bad Request
res.status(401) Unauthorized
res.status(403) forbidden
res.status(404) page not found.
res.status(500) internal server error

asynchrounous wait nhi krta hai thosa user chala uske hisab se product chalane start ho jate hai.and thora sa product chala to uske hisab se client code v start ho jata hai. esase programming ki speed improve ho jati hai.

synchronous means ek khatam hoga tb dusra start hoga jab dusra khatam hoga tb 3rd start hoga ....

javascript me import use krte hai q ki browser advance hota hai but nodejs old hai esliye usme module.exports = {} object and esko dusre file me excess krne ke liye require ka use krte hai.

node me require() use krte hai

filter hmesha array ke upar chalta hai ye specific tarah ke data ko array me dalata hai.
filter har ek data pe loop chala deta hai. agar vo data verify hua to usko new array me dalta hai varna next loop me next data ko check krta hai.

core module jo module already bane hote hai jaise console, fs,buffer, http ya bina import kiye jo use krte hai ye sab core module hote hai.

jo module import krne prte hai usko non global module bolte hai. ex fs, etc
jo module import nhi krne parte hai usko global module kahte hai jaise console etc

http module, server ke andar request and response ko handle krta hai.

single threaded ek time pe ek hi command use kr sakte hai.

nodejs async hoti hai

javascript and node code ko execute krne me kisi ka wait nhi krti hai. agar wait krana ho to asysnc await ya promise ka use krte hai api me

res.json() Sends a JSON response composed of the specified data.

call stack : kaha kaha se call hua hai.

HTTP: An HTTP request is made by a client, to a named host, which is located on a server. The aim of the request is to access a resource on the server.
http request and http response do hota hai


... ko spread operator bolte hai and Object.assign() ke jagah pe use krte hai ... es6 hai
let user = { name: "John Doe", age: 10 };
let copiedUser = Object.assign({}, user);
console.log(copiedUser); // { name: "John Doe", age: 10 }

json single quote me curly bracket me likhate hai. and object me bas bracket ke andar likhate hai.

The Payload of an API Module is the body of your request and response message.

Global variables can be made local (private) with closures.

To add getters and setters in the class, use the get and set keywords.

js file ko hamesha body ke last me rkhate hai.


The static keyword defines static methods for classes. Static methods are called directly on the class ( Car from the example above) - without creating an instance/object ( mycar ) of the class mtlb object banane ki need nhi hoti hai class se hi call ho jata hai.

super() is used as we can get the properties of parent class or parent constructor method
super(...) to call a parent constructor (inside our constructor only).


"..." is called spread operator in js and also rest operator jo add subtract krta ho arguments ko .

for loop me "in" object ke liye krte hai jisme key value pair hoti hai.

for loop me "of" ka use direct data ko excess krne ke liye krte hai.

decimal ke kitne place tak print karana hai ye tofixed() funtion batata hai argument me number dalte hai jitne number tak decimal chahte hai.

asynchronous means I will finish later ex: setTimeOut();

jab function ke andar function parameter pass krte hai to parameter ke function me bracket nhi lagate hai.

getHours() , getMinutes(), getSeconds(), se 11:23:50 ke jaise aata hai

async and await make promises easier to write"

async makes a function return a Promise.

await makes a function wait for a Promise.

fetch me by-default promise hi hota hai.

jab v koi data server se aati hai to vo ek string me aati hai usko object me convert krte hai

There are two ways of event propagation in the HTML DOM, bubbling and capturing.

ejs file template engine hoti hai nodejs me

nodejs v8 engine use krta hai run krne ke liye and javascript ko run krne ke liye v8 engine use hota hai.
opensource mtlb hm contribute v kr sakte hai, bina payment ke use kr sakte hai.
nodejs api ke liye use krte hai mostly ye server side run enviremonet hota hai.


module.exports se js file ko exports krte hai. fir usko jaha use krna hota hai usme import krte hai.


(__dirname) batata hai ki kisi file ki directory ya location kya hai.

global module jo ki import nhi krne parte hai jaise ex console, __dirname

non-global module jo ki import krne parte hai jaise ex file system, buffer etc

http : nodejs ke andar request and response ko handle krte hai and api ke request and response ko yahi handle krta hai

res = means client ko kuch n kuch send kr rhe hai
req = means server se kuch mang rhe hai. request kr rhe hai.

nodejs single threaded hoti hai and ye async v hoti hai.
javascript v async hoti h

writeHead se api create krte hai nodejs me content-Type: json type data send krte hai.

jab multiple users ho n to object ko array ke andar lena parta hai.


nodejs architecture.
1. call stack : isme har function register hota hai koun function pahle hoga koun baad me;

nodejs api and callback queue har baar kaam me nhi aata hai.

nodejs api: json wali api nhi hai ye jo 2 programming language ke bich me jo interaction hota hai usme ka nodejs api hai yaha c++ and javascript ho rha hai ye setTimeOut ke liye special hota hai. jiska setTimeout kam hota hai usko callback queue me pahle bhej deta hai,

server hamesha response 'res' krta hai and jab data mangana ho server se to 'req' bolte hai

common header add krne ke liye <%- include('common/header'); %>
variable ko show karane ke liye <%= variable_name %>

jaha authentication use krna hai ya req ya response me kuch changes krna hai ya routes me conditions lagana hai  vaha middleware use krte hai.


req.query object return krega and req.query.name name return krega means browser name data send kiya
req.body.name form se data lene ke liye use hota hai.
req.query.age url me jo age dete hai usme ka age excess krne ke liye use krte hai.

render karana mtlb html data ko browser pe show karana

routed middleware me kisi particular route ke upar laga sakte hai conditions ki aisa hoga to hi ye wala route chalega

grouped route level bahut sare routes ke upar ek sath middleware lagana esme var route =  express.Router() library ko use krke krne se perfect mana jata hai 
route.use(middleware) and sare routing me app.get ke place pe route.get likhate hai.

get method get krna , post method post and put method update and delete method data ko delete krne ke liye use krte hai

file ko upload krne ke liye multer library use krte hai.

event jo onclick se hota hai and emmiter jo click hone ke baad generate hota hai use emmiter kahte hai but node js me button hota nhi hai to ese api se banante hai button

pepl command line tool hota hai jisme javacript and node js ko run krte hai.

agar method different hai to route same rakh sakte hai ex: app.get('/',function()) and app.post('/',function()).

app.use(express.json()); esase jo request ke andar body aati hai use json format me convert krti hai dynamic data name email sab lane ke liye use hota hai req.body.name or req.body.name

const path = require('path')
pathfile =  path.join(__dirname,crud), crud folder hai to es folder tk ka complete path de dega

What Are Buffers? The Buffer class in Nodejs is designed to handle raw binary data. Each buffer corresponds to some raw memory allocated outside V8. Buffers act somewhat like arrays of integers, but aren't resizable and have a whole bunch of methods specifically for binary data.

Generator:- ES6 introduced a new way of working with functions and iterators in the form of Generators (or generator functions). A generator is a function that can stop midway and then continue from where it stopped. In short, a generator appears to be a function but it behaves like an iterator.

git pull se new code aa jata hai jo ki updated code hota hai

super() is used to we can get the properties of parent class or parent constructor method

kisi v array ya object ko split ya expend krne ke liye spread operator use krte hai.

jab function ke argument me use ho rha ho to use rest operator bolte hai AND array ban jata hai result me jo argument hota hai.


If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:

JSON Web Token is an open standard for securely transferring data within parties using a JSON object.

JWT has three parts 
Header
Payload, (registered claim, public claim, private claim) these are payload types 
Signature

Node.js’ crypto module. The Crypto.randomBytes() method generates cryptographically strong pseudo-random data for a given number of bytes.

Technology Used
Token: JWT
Password Hash: bcryptjs
Database: MongoDB

JWT is a header

#filing is used as private making ex private filing = #private

var chor ke let use kre and ES6 me const include hua hai

ek file me ek hi default bana sakte hai default banane se ek fayda hai ki 'use as' krke name nhi badalana hoga and import krne ke liye double curly bracket ka use nhi krna hota hai.

class ke andar property mtlb variable and agar method banana ho mtlb function banana hai.

agar class ke andar property banana ho to constructor() banake variable banate hai like
this.name = "balram"; and class me
method banane ke liye age koi function name nhi rakhte hai. like
buy(){
};

class ke andar jab v variable ko use krna hai to this.variable_name likhte hai.

and class ke bahar use krna ho to dot (.) likhke use krte hai.

jab constructor ke bahar vairable banane ho property (variable) banane ho to this nhi likhate hai 

array ke andar har value  ko alag alag variable dene ko destructuring bolte hai.

reference type : array, object ek object ko dusre obect se assign or point kr deta hai
premitive type : string number, esme assign oparator se ek variable se dusre variaable me copy ho jata hai.

let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

nisa gurgain

When we want to export a single class/variable/function from one module to another module, we use the module.exports way.	
When we want to export multiple variables/functions from one module to another, we use exports way.

Node JS is a fast JavaScript runtime environment that we use to build server-side applications, but it does not know how to perform serving files, handling requests, and handling HTTP methods, so this is where express js comes in.

The assign() method, being a static method, is called using the Object class name.

trim() The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.

------------ for rebasing your branch ----------
eska short me yahi mtlb hota hai ki jis jis log ne kaam kiya hai us file me sabka code aa

isNan function returns true if the argument is not a number; otherwise, it is false.

Void(0) is used to prevent the page from refreshing, and parameter “zero” is passed while calling.

All variables in JavaScript are object data types.

The pop() method is similar to the shift() method, but the difference is that the Shift method works at the array’s start. The pop() method takes the last element off of the given array and returns it. The array on which it is called is then altered.


json and xml dono ka same hota hia but  json light weight hota hia and xml heavy weight hota hai dono api me use hota hai./

fetch() method promise return krta hai jo ki then se handle krte hai agar resolve ho  rha ho to .then use krte hai agar reject kr rha ho to catch method use krte hai.


fetch('https://api.npms.io/v2/search?q=react')
        .then(response => response.json())
        .then(data => this.setState({ totalReactPackages: data.total }));
}







 jayega apne new created branch me

git checkout your-branch-name
git fetch origin
git rebase origin/develop
git push --force origin your-branch-name




----------------------------------   React   -----------------------------------

Best tutorial  of react

https://www.youtube.com/watch?v=wbaCi4MkAzg&list=PLX07l0qxoHFIo75SuT17zBernp2yYMqYh&index=85

axios ek promise return krta hai. ye by default json me convert hoke aata hai and fetch me json me convert krna parta hai.

app file me jo component call hota hai use parent bolte hai and jaha ye component banta hai vo child component hota hai. jo app component me function banta hai vo kahi se v kisi v component me as a props pass krke call kr sakte hai. 

npm ka alternative yarn hai

It is a JavaScript library for building user interfaces.
reactjs framework nhi hai this is a library.

Views are what the user sees rendered in the browser.

Babel is a JavaScript compiler

Flux is a pattern that helps to keep your data unidirectional. This makes the application more flexible that leads to increase efficiency. or how data flows in react application

agar koi chis baar bar use ho to use component me banate hai.

component : reusable building block

Props in React?-  We use props in React to pass data from one component to another component
props full form is : properties

JSX allows us to write HTML in React. ye direct browser pe show nhi hota hai ese compile krni prti hai show krane ke liye

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle.

JSX(JavaScript Extension)

In react there is two type of component
1. funtional component
2. class component


The functional component is also known as a stateless component because they do not hold or manage state.

class component: is also known as a stateful component because they can hold or manage local state

class component ke andar hooks useState ka use nhi kr sakte hai.

toggle krne ke liye ! lagate hai hook ke updated state me

{ condition ? <expression if true> : <expression if false> }

element ko hi tag bolte hai html me.

appendChild() ke argument me data dalte hai jo append krna hota hai end me, child mtlb end me.

npm init --yes this is used for default values for init.

component ke andar jo argument pass krte hai usi ko props khte hai.

json string and json object do hota hai jiska use json.parse() ya json.stringify() krke krte hai.

.toISOString() se object ko string me change krte hai.

When receiving data from a web server, the data is always a string.

obj = {name: "John", age: 30, city: "New York"};  // ye javascript ka object hai

string = {"name":"John","age":30,"city":"New York"};  json me jo data store hai uska format object hai

This example is a JSON string:  '{"name":"John", "age":30, "car":null}'

//Json string hota hai and javascript object hota hai.

json format me jo data  store hoti hai vo do tarah me store hota hai 1. object form me {"name":"balram"}
2. string form me '{"name": "balram"}'

String ko direct show nhi kara sakte console ya print me esko show krane ke liye object me convert krte hai.

[object object] aata hai eska mtlb data object form me hai and esko excess krne ke liye dot(.) ka use krte hai

state me v variable ke jaise data store krte hai but state me jaise data aati hai component ko pata chal jata hai ki koi data aa gyi hai update krna hai but variable ke case me aisa nhi hota hai.

class component me jab v constructor banate hai to usme super() method jaroor call krte hai. taki parent ka constructor call ho sake

state: data container hota hai. like variable
state ko bahar use kr sakte hai. nhi lekin kuch unauthenticate tarika hai jiske help se kr sakte hai,
The state is a built-in React object that is used to contain data or information about the component
state: state public hoti hai.
The state object is where you store property values that belongs to the component.

React components has a built-in state object.

A parameter is a named variable passed into a function.

class me render function se return hota hai and function me return krte hai

constructor html render hone se pahle ready/load ho jata hai.

component destroy hone pe life cycle fir se dubara chalegi.

componentDidMount tab call hota hai jab sara html and css page load ho jata hai uske baad componentDidMount automatic call hota hai and esme api call sab krte hai taki sabhi pahle load ho chuke ho.

render v lifecycle ka method hi hota hai.

agar componentDidMount ke upar state update karani ho to condition banake karate hai varna infinite loop ban jayega ya aap componentDidMount ke bahar stateupdate karaye to jyada thik hai.

componentDidUpdate ke 3 parameter hote hai preprops, prestate and snapshot.
this event is happen when component is updated.

render me condition v nhi lagate and ye har baar chalta hai esliye render ke andar setState() nhi kara sakte hai.

shouldComponentUpdate : apne aap me render funtion ko block kr deta hai and ye bydefault behaviour hai agar shouldComponentUpdate ko return true kr de to fir render kaam krne lag jata hai

conditional API call karane ke liye componentDidUpdate ko use krte hai
agar unconditonal API call karani hai to componentDidMount use krte hai


componentWillUnmount: jab v component ko remove krna ho to componentWillUnmount ko call krate hai mtlb us component ko DOM se hide krte hai

shouldComponentUpade pahle call hota hai and componentDidUpadate baad me call  hota hai

functional component ke upar life cycle use krne ke liye hooks use krte hai.


class component lifecycle me bydefault kuch keywords hote hai jaise state, life cycle, pure etc

class ke andar lifecycle method hote hai


usestate ek hook hai use ka baad agar koi world hai to samajh jao ye hook hai ex usestate useeffect useRef etc


map function ye ek new array create krta hai jo existing array se banta hai and existing array ko touch v nhi krta hai.
ye ek callback function v leta hai as a parameter

array.map(function(currentvalue, index, arr), thisValue) ---index and arr is optional

map() function calls the provided function once for each element in array, in order

hooks function component ke liye use hota hai ya functional component ka lifecycle hota hai.


useEffect- esme akele componentDidMount componentDidUpdate and componentWillUnmount ke combined form hai.
useEffect me jo parameter hota hai vo v as a function pass hota hai. And jab v state update hogi to useEffect hook call hoga. ya component banega tb useEffect chalta hai.


map ya for loop dono ek hi chis hai but react me map use hota hai looping ke liye. aisa esliye krte qki jo return function jo hota hai n usme map support karta hai, n ki for loop
map ek function hai. 


react-fragment: ye ek pattern hota hai jo multiple components ya multiple elements ko handle krta hai.

lifting state up ya send data child to parent component dono same hi hota hai 

pure component ek feature hota hai jo class component me use hota hai aur ye component ki re-rendering ko rokta hai and functional component ke liye memo use hota hai.

constructor jab v use kro to usme super() keyword jaroor lagaye

Ref ke help se DOM ko direct modify kr sakte hai.
Ref thori speed slow kr deti hai. Qki Ref react ko use nhi krta hai. Direct Dom ko use krta h.
Ref me kisi component ke kisi ek input field ya kisi ek element ke DOM ko change krte hai.

useRef functional component me DOM ko modify krne ke liye use krte hai.

jab Input and button dono alag alag component me ho to forwardRef use krte hai.

Uncontrolled me koun sa hook use krte hai. - "useRef"

jab react ke andar input field ko state se control krte hai to ese controlled component bolte hai.

HOC (high order component)Ek component dusre component ko as a props leta ho and component return krta ho.

react-router se related jo v kaam hota hai use <BrowseRouter></BrowserRouter> ke andar hi likhate hai varna error dikhega


router me <Link> use krte hai q ki link refresh nhi hota hai and anchor tag refresh hota hai.

Navigate me to "/" dete hai jis route pe jana ho <Navigate to = "home">

params: ek hi routing ke andar aur v route jaise user/name yr user/id , id to bahut sare honge to yaha params use krte hai.

Link me className nhi dete hai agar className dena ho to NavLink use krte hai.


Redux: whole application data ko store krta hai.

jab ek hi component me data transfer krna hota hai to usme usestate use krte hai.

And jab ek components se dusre component me data transfer krni ho to props use krte hai.

useParams: use to get dynamic routing value , localhost:3000/user/100
useSearchParams: Use to get query params,  localhost:3000/user?id=100


database se data nikalne ke liye koi server side language use krte hai jaise nodejs python java etc ye database se data nikal ke de deta hai jisko ui pe show kra dete hai.

GET krte hai get krne ke liye
POST krte hai data ko bhejne ke liye
PUT krte update krne ke liye
DELETE krte hai delete krne ke liye

PUT is a method of modifying resource where the client sends data that updates the entire resource . PATCH is a method of modifying resources where the client sends partial data that is to be updated without modifying the entire data


The useState hook is used for storing variables that are part of your application's state and will change as the user interacts with your website. The useEffect hook allows components to react to lifecycle events such as mounting to the DOM, re-rendering, and unmounting.


useState
The useState hook is a function that takes one argument, which is the initial state, and it returns two values: the current state and a function that can be used to update the state.


what is call back function:-

"I will call back later!"
A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished


jab api ko json me convert krte hai to fir se promise return krta hai to fir .then use krte hai. 

useEffect callback function leta hai jab v api call krana ho to useEffect hook ka use kiya jata hai.

The onchange event occurs when the value of an element has been changed. For radiobuttons and checkboxes, the onchange event occurs when the checked state has been changed. Tip: This event is similar to the oninput event.


jab v api hit hota hai to 1st baar check krta hai ki server available hai ya nhi (Console me Network ke andar) fir dusri baar me data ko send krta hai database me

ContextAPI kahi se v kahi data ko le jana ho to ese use krte hai varna normal data move krna ho to root node me le jate hai fir root node se hote hue dusri jagah le jate hai.


axios : ye external api ya url ko hit krne ke liye use hota hai. ye npm ka library hota hai
agar app same hai to internal url bolte hai agar dusra app (component) hai to usko external url bolte hai.

useEffect ko ek baar chalane ke liye blank array pass kr dete hai.

exact : ye Route me likhate hai agar exact likh de to route me exact yahi hona chahiye agar kuch v aage piche hota to nhi lega like path ='/music'  path ='ssd/music/name' yaha kaam nhi krega exact '/music' dekhega tabhi hoga

React is known as ReactJs, which is a JavaScript library to build single-page web applications. Besides, React Native is a React JS-based framework to design mobile apps.


The Typography is a reusable component that helps presenting the content in a React application. It could trim down a lot of time as the application grows.

snackbars provide brief notifications. The component is also known as a toast.

label vo hota hai jo text me likhate hai.

agar height width define krna ho to usko <Box></Box> ke andar daal ke likhate hai.

In class component there are pure component, life cycle , state are available but this is not available in functional component

In functional component there is a hook usestate, useEffect useRef

jab  v state update hoga useEffect chalega 

jav fixed route nhi milta hia to dynamic route chalta hai jaise
/users/:id      dynamic route   id ki value run time pe decide hoga ki kya hoga 
/users/admin    fixed route

child routing me <Outlet> use krte hai outlet vaha use krte hai jaha child component ko dikhana hota hai.

useEffect jab first time component run krega ya jab jab component update hota tab chalta hai.

when we want to change page dynamic then we modify DOM 

DOM manupulation: getElementbyId(). innerhtml = new value ke help se krte hai.
dom manupulation real dom hota hai and ye website ko slow krta hai. esko kam se kam use krna chahiye

jo element tag me open hota hai vo real dom hota hai

real dom hi screen pe dikhata hai

react fiber is new conciliation algo that was introduced in react 16 . It is designed to improve the performance and flexibility of react by breaking down the render process into smaller.

react Reconciliation 

Controlled Component: in form input field is controlled by react espe controll acha hota hai. ye state se controlled hota hai

Uncontrolled component: It has limited control over the form elements and data, aur ye state se controlled nhi hota hai kisi aur tarike se controlled hota hai.

input field me jab v click krte hai to ek object return krta hai esko excess krne ke liye event.target.value se krte hai.

bar bar reload ko rokane ke liye preventdefault function call krte hai ex e.preventDefault();





--------------------------    REDUX   --------------------------------

Redux: whole application data ko store krta hai.
1. Action : collect data from component and api
2. Reducer: Get data from Action and send to store
3. Store  : State(data) of complete Application
4. View   : React Component

ek application ke andar ek hi store banate hai.







----------------------------- socket.io ----------------------------

 You can create and fire custom events using the socket.emit

 //Send this event to everyone in the room.
   io.sockets.in("room-"+roomno).emit('connectToRoom', "You are in room no. "+roomno);

Rooms: this is an arbitrary channels that sockets can join and leave. this is called rooms.

bidirectional communication means server pe jaise update ayega vaise client ko message kr dega, client ko baar baar message krke puchna nhi parega ki mere liye kuch data aayi hai kya.

The Socket.IO connection begins with the handshake

jab sarif sarafat chorte hai to bahut bhayankar ho jate hai .

websocket: it is a bidirectional communication protocol





-------------------    Nodejs ----------------------------

CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

Sequelize is a Node.js-based Object Relational Mapper that makes it easy to work with MySQL, MariaDB, SQLite, PostgreSQL databases, and more

Express is for building the Rest apis
cors provides Express middleware to enable CORS with various options.

CORS is a node. js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

Express-session - an HTTP server-side framework used to create and manage a session middleware.	 

Cookie-parser - used to parse cookie header to store data on the browser whenever a session is established on the server-side.

Express.js is a fast, minimalist framework that provides several features for building web applications in Node.js. CORS is a Node.js package that allows communication between different domains.

// express.json() Demo Example

// Importing the express module
var express = require('express');

// Initializing the express and port number
var app = express();
var PORT = 3000;

// Calling the express.json() method for parsing
app.use(express.json());

// Reading content-type
app.post('/', function (req, res) {
   console.log(req.body.name)
   res.end();
})

// Listening to the port
app.listen(PORT, function(err){
   if (err) console.log(err);
   console.log("Server listening on PORT", PORT);
});


shift+ctrl+↵ Insert line above.
ctrl+↵ Insert line below.
shift+ctrl+K. Delete line.
shift+alt+UP. Copy line up.
shift+alt+DOWN. Copy line down.
alt+UP. Move line up.
alt+DOWN. Move line down.








--------------------HTML-------------------------------

The <meta> tag defines metadata about an HTML document. Metadata is data (information) about data.

The <script> tag is used to embed a client-side script (JavaScript).

The defer attribute is a boolean attribute. ye cdn jab use hota hai tb use krte hai taki jab sab data load ho jaye cdn ka tab <javascript defer> tab ye tag chale







--------------How to create merge request-----------------

git add .
git commit -m "message"
git push 
then git push --set-upstream origin login-signup-translation then run this command
then merge request ayegi us link ko google tab se open krke assign and final merge request create kr dete hai


--------------Rebase-----------------------
git add .
git commit -m''
git checkout develop
git pull
git checkout currentbranch
git rebase develop
git rebase --skip after conflict resolve then add
git push --force origin currentbranchname
 open gitlab and create merge request click here
 add ticket link in description
 assign self assign
 then create
 
 
 git checkout your-branch-name
git fetch origin
git rebase origin/develop
git push --force origin your-branch-name
for rebasing your branch


// close commit 
git commit --allow-empty -m 'closes AR-3393'
git push
then ek link create hota hai usko copy krke run krte hai to final push ho jata hai.






Pooling

database connection reuse ho sake esliye pooling ka use krte hai.









