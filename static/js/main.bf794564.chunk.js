(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){"use strict";var a=n(11),r=n.n(a),o=new URLSearchParams(window.location.search),s=o.get("limit"),i=o.get("dif"),c=0,l=[],u=function(){console.log(l[c]);var e=0;l[c].attemptedAnswer==l[c].corectAnswer&&(e=1);var t=o.get("limit"),n=o.get("cid"),a=o.get("crcid"),s=o.get("sid"),u=o.get("uid"),m=o.get("id"),d=o.get("type");r.a.ajax({url:"https://nano-softs.com/adaptive/api.php?prb="+l[c].problem+"&aa="+l[c].attemptedAnswer+"&ca="+l[c].corectAnswer+"&tt="+l[c].timeTaken+"&st="+e+"&tkn=f6083658c798db3c3c3227aa5a813c601da7c196fb0871feb0e23bc2528ca35a9253ef957e37d1d7a25e4360a12652ba5493963207def560cd9cab32db8fe0db6602bc278fcfc5be790fb520811d59236734c52e8e25b8dabdece79b16e1815a15bffd16ef0c5e1d46aa9571d6d687d304724f71aa1b06f929ca2b4da5d5add11efa614b69f83ad544bbf2b41c0afe4689c6457f99006d5943affd31ea6f49d3&limit="+t+"&cid="+n+"&crcid="+a+"&sid="+s+"&dif="+i+"&uid="+u+"&id="+m+"&type="+d+"&gt=a",type:"post",data:"",success:function(e){console.log(e),alert("hit")},error:function(e){}})};t.a={setData:function(e,t,n){l.push({index:c,problem:e,attemptedAnswer:t,corectAnswer:n,timeTaken:null})},setDataTime:function(e){l[c].timeTaken=e,u(),c+=1},sendData:u,limit:s,dif:i}},,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/removeItem.91412d06.mp3"},,,,,function(e,t,n){e.exports=n.p+"static/media/bowl.cabc22c6.png"},,function(e,t,n){e.exports=n.p+"static/media/10.57a2639b.svg"},function(e,t,n){e.exports=n.p+"static/media/1.a7f0e4e3.svg"},function(e,t,n){e.exports=n.p+"static/media/sound.7360a269.png"},function(module,__webpack_exports__,__webpack_require__){"use strict";var _sessionData__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9),PRIMES_NUMBERS=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97],getRandomSymbol=function(){var e=["+","-","/","*","+"],t=e.length-1;return e[Math.round(Math.random()*(+t-0)+0)]},evaluate=function(e,t){return function(){return getRandomNumber(5)}},getRandomNumber=function(e){var t,n=1;return null==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif||"b"==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif?(e=5,n=1,t=(Math.random()*(e-n)+1).toFixed()):"i"==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif?(e=20,n=10,t=(Math.random()*(e-n)+n).toFixed()):"m"==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif&&(e=30,n=15,t=(Math.random()*(e-n)+n).toFixed()),t},generateProblem=function(e){var t=getRandomNumber(),n=t,a=getRandomSymbol(),r=evaluate(a,t)()||0;return{problem:n+=" ".concat(a," ").concat(r),firstNumber:t,secondNumber:r,symbol:a}},generateAdditionProblem=function(e){var t=getRandomNumber(),n=getRandomNumber(),a=t;return{problem:a+=" ".concat("-"," ").concat(n),firstNumber:t,secondNumber:n,symbol:"-"}},generateSubtractionProblem=function(e){var t=getRandomNumber();console.log(t),0==t&&(t=1);var n=getRandomNumber();if(console.log(n),0==n&&(n=1),t<n){var a=t;t=n,n=a}var r=t;return{problem:r+=" ".concat("-"," ").concat(n),firstNumber:t,secondNumber:n,symbol:"-"}},compare=function(e,t){return solve(e)===Number(t)},getRandomInt=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},solve=function solve(expression){var result=eval(expression);return result.toString().includes(".")?Number(result.toFixed(2)):result};__webpack_exports__.a={generateProblem:generateProblem,compare:compare,solve:solve,generateAdditionProblem:generateAdditionProblem,generateSubtractionProblem:generateSubtractionProblem,getRandomInt:getRandomInt}},,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/drop.2fd9ac22.wav"},,function(e,t,n){e.exports=n.p+"static/media/tostartpressbutton.424d1898.mp3"},function(e,t,n){e.exports=n.p+"static/media/321go.8efff185.mp3"},function(e,t,n){e.exports=n.p+"static/media/rightAnswer.09b0b7bb.mp3"},function(e,t,n){e.exports=n.p+"static/media/wrongAnswer.ddcbc59b.mp3"},function(e,t,n){e.exports=n.p+"static/media/rooster.7890a5da.png"},,function(e,t,n){e.exports=n.p+"static/media/_1.40d8e09c.mp3"},function(e,t,n){e.exports=n.p+"static/media/_2.65a6b97d.mp3"},function(e,t,n){e.exports=n.p+"static/media/_3.6bd41911.mp3"},function(e,t,n){e.exports=n.p+"static/media/_4.ae5c58d7.mp3"},function(e,t,n){e.exports=n.p+"static/media/_5.fa32eb88.mp3"},function(e,t,n){e.exports=n.p+"static/media/_6.639f363f.mp3"},function(e,t,n){e.exports=n.p+"static/media/_7.7fc04555.mp3"},function(e,t,n){e.exports=n.p+"static/media/_8.9c9b9bcb.mp3"},function(e,t,n){e.exports=n.p+"static/media/_9.fc30493c.mp3"},function(e,t,n){e.exports=n.p+"static/media/_10.594c0b0e.mp3"},,function(e,t,n){e.exports=n.p+"static/media/instructions.8164e48c.gif"},,function(e,t,n){e.exports=n.p+"static/media/background.612faa13.gif"},function(e,t,n){e.exports=n.p+"static/media/background2.d6687daa.gif"},function(e,t,n){e.exports=n.p+"static/media/grocerySound.a0d6b138.mp3"},function(e,t,n){e.exports=n.p+"static/media/mute.f02ac89a.png"},function(e,t,n){e.exports=n(109)},,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),s=n.n(o),i=n(26),c=n(16),l=n(40),u={points:0,lifes:10,seconds:300,level:1,isFinished:!1,isStarted:!1},m=Object(c.c)(Object(c.a)(l.a))(c.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GAIN_POINTS":var n=e.points+t.payload;return Object.assign({},e,{points:n});case"SET_TIME":return Object.assign({},e,{seconds:t.payload});case"CORRECT_ANSWER":var a={points:e.points+t.payload.points,level:e.level+t.payload.level};return Object.assign({},e,a);case"REMOVE_LIVE":var r=e.lifes-t.payload.lives;return Object.assign({},e,{level:e.level-t.payload.level,lifes:r});case"FINISH_GAME":return Object.assign({},e,{isFinished:t.payload});case"RESTART_GAME":return Object.assign({},e,{points:0,lifes:10,seconds:300,level:1,isFinished:!1});case"START_GAME":return Object.assign({},e,{isStarted:!0});case"EARN_LIFE":return Object.assign({},e,{lifes:e.lifes+1});case"REBOOT_GAME":return Object.assign({},e,{points:0,lifes:10,seconds:300,level:1,isFinished:!1,isStarted:!1});default:return e}}),d=(n(72),n(3)),f=n(4),p=n(5),b=n(2),h=n(6),g=function(e){return function(t){t(e?{type:"FINISH_GAME",payload:!0}:{type:"RESTART_GAME",payload:!0})}};var v=function(e){var t=e.children,n=e.isClicked;return r.a.createElement("button",{className:"App-link",onClick:n},t)},E={set:function(e,t){localStorage.setItem(e,t)},get:function(e){return localStorage.getItem(e)}},y={set:function(e,t){sessionStorage.setItem(e,t)},get:function(e){return sessionStorage.getItem(e)}},w=(n(73),n(41)),_=n.n(w),S=n(42),O=n.n(S),k=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={player:"player",startGameSound:new Audio(_.a),countDownSound:new Audio(O.a)},n.setNameOfPlayer=function(e){n.setState({player:e.target.value})},n.clicked=function(){y.set("onlinePlayer",n.state.player),n.state.countDownSound.play(),n.props.startPressed()},n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return this.state.startGameSound.play(),r.a.createElement("div",null,r.a.createElement("div",{className:"App-brandname"},r.a.createElement("i",{className:"fas fa-graduation-cap"}),r.a.createElement("br",null)),r.a.createElement("p",null,"\u06af\u06cc\u0645 \u0634\u0631\u0648\u0639 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u0628\u0679\u0646 \u062f\u0628\u0627\u0626\u06cc\u06ba\u06d4"),r.a.createElement(v,{isClicked:this.clicked},"\u0634\u0631\u0648\u0639 \u06a9\u0631\u06cc\u06ba"))}}]),t}(r.a.Component),j=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={msg:3},n.handleCount=function(e){return 1===e.msg?{msg:"\u0686\u0644\u0648"}:"\u0686\u0644\u0648"===e.msg?{msg:void 0}:{msg:e.msg-1}},n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalRef=setInterval(function(){return e.setState(e.handleCount)},1e3)}},{key:"shouldComponentUpdate",value:function(e,t){return void 0!==t.msg||(clearInterval(this.intervalRef),this.props.isComplete(),!1)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalRef)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null," ...\u062a\u06cc\u0627\u0631 \u06c1\u0648 \u062c\u0627\u0624"),r.a.createElement("h1",null,this.state.msg))}}]),t}(r.a.Component),A={yellow:"#d8b600",lightBlue:"#61dafb",darkGray:"#999ea7",midGray:"#424855",lightGray:"#f5f5f5",darkBg:"#282c34",red:"#ff6572",green:"#31cd61"},x=n(43),N=n.n(x),C=n(44),R=n.n(C);function M(e){var t=e.text,n=e.type,a=new Audio(N.a),o=new Audio(R.a);return"success"===n?a.play():o.play(),r.a.createElement("span",null,t&&"success"===n&&r.a.createElement("h4",{style:{color:A.green}},t),t&&"success"!==n&&r.a.createElement("h4",{style:{color:A.midGray}},"\u0635\u062d\u06cc\u062d \u062c\u0648\u0627\u0628: ",r.a.createElement("span",{style:{color:A.lightGray}},t)))}var P=function(e){var t=e.type,n=e.text,a="success"===t?{class:"correct-answer",el:r.a.createElement("i",{className:"fas fa-check"})}:{class:"wrong-answer",el:r.a.createElement("i",{className:"fas fa-times-circle"})};return r.a.createElement("section",null,r.a.createElement("div",{className:"answer  ".concat(a.class)},r.a.createElement("h2",null," ",a.el," ")),r.a.createElement(M,{type:t,text:n}))},D=n(34),I=n(29),T=n.n(I),G=n(45),W=n.n(G),L=(n(100),n(9)),B=n(8),H=n(13),U=n(23),F=n.n(U),K=(n(38),n(47)),z=n.n(K),q=n(48),J=n.n(q),V=n(49),Y=n.n(V),X=n(50),$=n.n(X),Q=n(51),Z=n.n(Q),ee=n(52),te=n.n(ee),ne=n(53),ae=n.n(ne),re=n(54),oe=n.n(re),se=n(55),ie=n.n(se),ce=n(56),le=n.n(ce),ue=n(24),me=n.n(ue),de=n(25),fe=(n(39),n(14)),pe=function(e){var t=e.image,n=e.handleClick,a=e.imageRef,o=F()(t.src),s=Object(B.a)(o,1)[0];return console.log(a),r.a.createElement(H.a,{image:s,x:t.x,y:t.y,width:90,height:70,offsetX:s?45:0,offsetY:s?35:0,onClick:n,onTouchStart:n})},be=function(e){r.a.useRef();var t=r.a.useRef(),n=r.a.useState([]),o=Object(B.a)(n,2),s=o[0],i=o[1],c=Object(de.a)(me.a),l=Object(B.a)(c,1)[0],u=r.a.useState(!1),m=Object(B.a)(u,2),d=(m[0],m[1],r.a.useState(300)),f=Object(B.a)(d,2),p=f[0],b=f[1],h=r.a.useState(200),g=Object(B.a)(h,2),v=g[0],E=g[1],y=r.a.useRef(),w=r.a.useRef(),_=r.a.useState([new Audio(z.a),new Audio(J.a),new Audio(Y.a),new Audio($.a),new Audio(Z.a),new Audio(te.a),new Audio(ae.a),new Audio(oe.a),new Audio(ie.a),new Audio(le.a)]),S=Object(B.a)(_,1)[0];var O=function(){var e=w.current.offsetWidth,t=w.current.offsetHeight;b(e),E(t)};return Object(a.useEffect)(function(){return O(),window.addEventListener("resize",O),function(){window.removeEventListener("resize",O)}},[]),r.a.createElement("div",{className:"noselect parentDiv",style:{display:"flex"}},r.a.createElement("div",null,r.a.createElement("button",{className:"btn fourth answerButton"},e.answer),r.a.createElement("br",null),r.a.createElement("button",{className:"App-link fa fa-paper-plane",style:{background:"rgb(49 205 97)",border:"1px solid #057897",borderRadius:"0.6em"},onClick:e.handleAnswer})),r.a.createElement("div",{className:"dropBox",ref:w},r.a.createElement(fe.DropTarget,{targetKey:"me",onHit:function(){var t;i(s.concat([{x:Math.random()*(p-90)+50,y:Math.random()*(v-70)+30,src:e.img}])),(t=e.count)<S.length&&S[t].play(),e.incCount(1)}},r.a.createElement(H.c,{width:p,height:v,ref:t},r.a.createElement(H.b,null,s.map(function(t){return r.a.createElement(pe,{image:t,handleClick:function(){console.log("adf"),i(s.filter(function(e){return e!==t})),l(),e.decCount(1)},imageRef:y})}))))),r.a.createElement("div",null,r.a.createElement(fe.DragDropContainer,{targetKey:"me",onDragStart:function(){console.log(y)},onDrop:function(e){console.log(e.dropData.name)},style:{border:"1px dashed white",borderRadius:"0.6em",padding:"15px"}},r.a.createElement("img",{alt:"lion",src:e.img,className:"noselect  questionImage",style:{display:"block"},ref:y})),r.a.createElement("br",null),r.a.createElement("br",null)))},he=n(31),ge=n.n(he),ve=n(32),Ee=n.n(ve),ye=function(e){var t=e.image,n=e.handleClick,a=F()(t.src),o=Object(B.a)(a,1)[0];return r.a.createElement(H.a,{image:o,x:t.x,y:t.y,width:90,height:70,offsetX:o?45:0,offsetY:o?35:0,onClick:n,onTouchStart:n})},we=function(e){r.a.useRef();var t=r.a.useRef(),n=r.a.useRef(),o=r.a.useState([]),s=Object(B.a)(o,2),i=s[0],c=s[1],l=Object(de.a)(me.a),u=Object(B.a)(l,1)[0],m=r.a.useState(!1),d=Object(B.a)(m,2),f=(d[0],d[1],r.a.useState(300)),p=Object(B.a)(f,2),b=p[0],h=p[1],g=r.a.useState(200),v=Object(B.a)(g,2),E=v[0],y=v[1],w=r.a.useState(null),_=Object(B.a)(w,2),S=_[0],O=_[1],k=r.a.useState(1),j=Object(B.a)(k,2),A=j[0],x=j[1],N=r.a.useRef();var C=function(){var e=N.current.offsetWidth,t=N.current.offsetHeight;h(e),y(t)};return Object(a.useEffect)(function(){return console.log(n),C(),window.addEventListener("resize",C),function(){window.removeEventListener("resize",C)}},[]),r.a.createElement("div",{className:"noselect parentDiv",style:{display:"flex"}},r.a.createElement("div",null,r.a.createElement("button",{className:"btn fourth answerButton"},e.answer),r.a.createElement("br",null),r.a.createElement("button",{className:"App-link",style:{background:"rgb(49 205 97)",padding:"10px",border:"1px solid #057897",borderRadius:"0.6em"},onClick:e.handleAnswer},"Check")),r.a.createElement("div",{className:"dropBox",ref:N},r.a.createElement(fe.DropTarget,{targetKey:"me",onHit:function(){c(i.concat([{x:Math.random()*(b-90)+50,y:Math.random()*(E-70)+30,src:S}])),e.incCount(A)}},r.a.createElement(H.c,{width:b,height:E,ref:t},r.a.createElement(H.b,null,i.map(function(t){return r.a.createElement(ye,{image:t,handleClick:function(){c(i.filter(function(e){return e!==t})),u(),t.src.includes("10")?e.decCount(10):e.decCount(1)}})}))))),r.a.createElement("div",null,r.a.createElement(fe.DragDropContainer,{targetKey:"me",onDragStart:function(){O(ge.a),x(10)}},r.a.createElement("img",{alt:"lion",src:ge.a,className:"noselect  questionImage "})),r.a.createElement("br",null),r.a.createElement(fe.DragDropContainer,{targetKey:"me",onDragStart:function(){O(Ee.a),x(1)}},r.a.createElement("img",{alt:"lion",src:Ee.a,className:"noselect  questionImage ",ref:n}))))},_e=(n(105),n(106),n(57)),Se=n(58),Oe=n.n(Se),ke=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).wrapperRef=r.a.createRef(),n.state={problemHint:[{problem:"2+3",Hint:"\u0639\u0644\u06cc \u0646\u06d2 \u0622\u067e \u06a9\u0648 3 \u0631\u0648\u067e\u06d2 \u0627\u0648\u0631 \u0627\u0633\u0627\u0645\u06c1 \u0646\u06d2 \u0622\u067e \u06a9\u0648 2 \u0631\u0648\u067e\u06d2 \u062f\u06cc\u06d2\u06d4 \u062a\u0648 \u0622\u067e \u06a9\u06d2 \u067e\u0627\u0633 \u06a9\u0644 \u06a9\u062a\u0646\u06d2 \u0631\u0648\u067e\u06d2 \u06c1\u06cc\u06ba\u061f"}],showHint:!0,currentProblem:null},n.handleClickOutside=function(){n.setState({showHint:!1})},n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"toggleHint",value:function(e){this.setState({showHint:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("i",{onClick:function(){e.toggleHint(!e.state.showHint)},className:"fas fa-info"}),r.a.createElement("div",null,this.state.showHint&&r.a.createElement("div",{class:"thought ",onClick:function(){e.toggleHint(!e.state.showHint)},style:{top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.9)",color:"red"}},r.a.createElement("img",{src:Oe.a,style:{top:0,left:0,right:0,bottom:0,margin:"auto",maxWidth:"1000px",width:"60%",position:"absolute"}}))))}}]),t}(r.a.Component),je=Object(_e.a)(ke),Ae=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o))))._isMounted=!1,n.state={problem:"",firstNumber:0,secondNumber:0,symbol:"",answer:0,modal:"",modalShowing:!1,streaks:0,images:[T.a,W.a],randomImage:"",data:[],totalProblems:1},n.earnLife=function(){n.props.onEarnLife(),n.showModal("success","STREAK!! You won a life \u2665"),n.setState({streaks:0})},n.correctAnswer=function(){n.state.streaks>2?n.earnLife():n.showModal("success"),n._isMounted&&n.props.onCorretAnswer(),n.setState(function(e){return{streaks:e.streaks+1}}),n.nextProblem()},n.wrongAnswer=function(){n._isMounted&&n.props.onWrongAnswer(),n.setState({streaks:0}),n.showModal("error",D.a.solve(n.state.problem).toString()),n.nextProblem()},n.nextProblem=function(){setTimeout(function(){n.getProblem(),n._isMounted&&n.setState({modalShowing:!1,answer:0,totalProblems:n.state.totalProblems+1}),n.props.lifes>0&&n.answerInput&&n.answerInput.focus()},2500)},n.evaluateProblem=function(){var e=D.a.solve(n.state.problem),t=n.state.answer,a=n.state.firstNumber+"!"+n.state.secondNumber;return L.a.setData(a,t,e),D.a.compare(n.state.problem,n.state.answer)?n.correctAnswer():n.wrongAnswer()},n.keyingUp=function(e){"Enter"===e.key&&n.evaluateProblem();var t=e.target.value;n.setState({answer:Number(t.match(/((-?)\d+)/g))})},n.showModal=function(e,t){n.setState({modal:r.a.createElement(P,{type:e,text:t}),modalShowing:!0})},n.getProblem=function(){var e=D.a.generateSubtractionProblem(n.props.points),t=n.getImage();n._isMounted&&n.setState({problem:e.problem,firstNumber:e.firstNumber,secondNumber:e.secondNumber,symbol:e.symbol,randomImage:t})},n.populateHover=function(){for(var e=[],t=0;t<n.state.firstNumber;t++)e.push(!1);n.setState({hover:e})},n.getImage=function(){return n.state.images[D.a.getRandomInt(0,n.state.images.length-1)]},n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidUpdate",value:function(){this.state.totalProblems>L.a.limit&&this.props.onEndGame()}},{key:"componentDidMount",value:function(){this._isMounted=!0,this.getProblem(),this.populateHover()}},{key:"shouldComponentUpdate",value:function(e){return this.props.lifes<1?(this.props.onEndGame(this.state.points),!1):e.lifes>-1}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"show-up",style:{width:"100%",height:"100vh"}},r.a.createElement("div",null,this.state.modalShowing?this.state.modal:r.a.createElement("div",null,"b"!=L.a.dif?r.a.createElement("div",null,r.a.createElement("h1",{style:{fontSize:"3.5em"}}," ",this.state.problem," "),r.a.createElement(we,{handleAnswer:this.evaluateProblem,answer:this.state.answer,incCount:function(t){e.setState({answer:e.state.answer+t})},decCount:function(t){e.setState({answer:e.state.answer-t})},count:this.state.answer,img:this.state.randomImage})):r.a.createElement("div",null,r.a.createElement("h1",{style:{fontSize:"3.5em"}}," ",this.state.problem," "),r.a.createElement(be,{handleAnswer:this.evaluateProblem,answer:this.state.answer,incCount:function(t){e.setState({answer:e.state.answer+t})},decCount:function(t){e.setState({answer:e.state.answer-t})},count:this.state.answer,img:this.state.randomImage})))))}}]),t}(r.a.Component),xe={fontSize:"1.5em",color:"black",fontFamily:"fantasy",cursor:"pointer"},Ne={height:0,border:"0.5px solid #61dafb"},Ce={color:"black",fontWeight:"bold"},Re=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=Ne,t=xe,n=Ce;return r.a.createElement("div",null,r.a.createElement("h1",null," !!!\u06a9\u06be\u06cc\u0644 \u062e\u062a\u0645 "),r.a.createElement("hr",{style:e}),r.a.createElement("h3",null,"\u062d\u062a\u0645\u06cc \u0627\u0633\u06a9\u0648\u0631",r.a.createElement("b",{style:n}," =  "+this.props.points)),r.a.createElement("br",null),r.a.createElement("h3",{style:t,onClick:this.props.retryGame},"\u062f\u0648\u0628\u0627\u0631\u06c1 \u06a9\u0648\u0634\u0634 \u06a9\u0631\u06cc\u06ba"),this.children)}}]),t}(r.a.Component),Me=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(p.a)(this,Object(b.a)(t).call(this,e))).state={seconds:n.props.seconds,level:n.props.level,limit:0,totalProblems:1},n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({seconds:this.props.seconds,limit:L.a.limit}),this._secondsIntervalRef=setInterval(function(){return e.setState(function(e){return{seconds:--e.seconds}})},1e3)}},{key:"componentDidUpdate",value:function(){var e=this;this.props.level!==this.state.level&&(L.a.setDataTime(300-this.state.seconds),this.setState(function(t){return{level:e.props.level,totalProblems:e.state.totalProblems+1,seconds:300}}),this.props.setTimeChanged(this.state.seconds))}},{key:"componentWillUnmount",value:function(){clearInterval(this._secondsIntervalRef)}},{key:"render",value:function(){return r.a.createElement("span",null,r.a.createElement("b",null," ",this.state.totalProblems,"/",this.state.limit," "))}},{key:"timeTaken",value:function(){return 20-this.state.seconds}}]),t}(r.a.Component);Me.defaultProps={level:0};var Pe=Me;var De=function(e){var t=e.lifes,n=[];if(t<5)for(var a=0;a<t;a++)n.push(r.a.createElement("i",{key:a,style:{marginLeft:"0.1em"},className:"fas fa-heart"}));else n.push(r.a.createElement("i",{key:t,style:{marginLeft:"0.1em"},className:"fas fa-heart"}));return r.a.createElement("span",{style:{color:A.red}},t>4&&r.a.createElement("b",null,"".concat(t,"x")),n)};function Ie(e){var t=e.points;return r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-star",style:{color:A.yellow}})," ",t)}n(107);var Te=n(59),Ge={container:{display:"flex",justifyContent:"space-around"},el:{flex:1},title:{margin:"0.6em auto"},divider:{border:"0.5px solid ".concat(A.midGray)},timeCol:{flex:1,padding:"0.3em 0em",fontSize:"0.6em",color:A.darkGray},sectionContainer:{textAlign:"left",padding:"0.15em 0em"}};function We(e){var t=e.player;return r.a.createElement("div",{style:Ge.sectionContainer},r.a.createElement("h5",{style:Ge.title},t.name),r.a.createElement("div",{style:Ge.container},r.a.createElement("small",{style:Ge.timeCol},r.a.createElement("i",{className:"fas fa-clock"})," "+Te(new Date(t.time)).fromNow()),r.a.createElement("small",{style:Ge.el},r.a.createElement("i",{className:"fas fa-star",style:{color:A.yellow}})," ",t.points)),r.a.createElement("hr",{style:Ge.divider}))}function Le(e){var t=e.points,n=y.get("onlinePlayer"),a=JSON.parse(E.get("scoreTable"))||[];return a.push({name:n,points:t,time:Date.now()}),a=a.sort(function(e,t){return t.points-e.points}).slice(0,4),E.set("scoreTable",JSON.stringify(a)),r.a.createElement("div",null,a.map(function(e,t){return r.a.createElement(We,{player:e,key:t})}))}var Be=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={isBeginningDone:!1,lastPoints:0},n.retryGame=function(){n.setState({isBeginningDone:!1}),n.props.onRetryGame()},n.completeBeginning=function(){n.setState({isBeginningDone:!0})},n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return this.props.isFinished?r.a.createElement(Re,Object.assign({},this.props,{retryGame:this.retryGame}),r.a.createElement(Le,this.props)):r.a.createElement("div",null,this.state.isBeginningDone?r.a.createElement("div",{className:"noselect "},r.a.createElement("div",{className:"App-header-bar"},r.a.createElement(Pe,this.props),r.a.createElement(De,this.props),r.a.createElement(Ie,this.props),r.a.createElement(je,null)),r.a.createElement("div",null,r.a.createElement(Ae,this.props))):r.a.createElement(j,{isComplete:this.completeBeginning}))}}]),t}(r.a.Component),He=(n(108),n(60)),Ue=n.n(He),Fe=n(61),Ke=n.n(Fe);var ze=n(62),qe=n.n(ze),Je=n(33),Ve=n.n(Je),Ye=n(63),Xe=n.n(Ye),$e=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={img:Ve.a,sound:new Audio(qe.a)},n.gameStart=function(){n.props.onStartGame()},n.handleSoundClick=function(){n.state.sound.paused?n.state.sound.paused&&(n.state.sound.play(),n.setState({img:Ve.a})):(n.state.sound.pause(),n.setState({img:Xe.a}))},n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"handleURL",value:function(){}},{key:"componentDidMount",value:function(){this.state.sound.play()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"b"==L.a.dif?r.a.createElement("img",{src:Ue.a,id:"bg",alt:""}):r.a.createElement("img",{src:Ke.a,id:"bg",alt:""}),r.a.createElement("div",null,r.a.createElement("img",{alt:"mute",src:this.state.img,style:{position:"fixed",top:"20px",left:"20px",maxWidth:"40px",width:"100%",zIndex:4},onClick:this.handleSoundClick})),this.props.isStarted?r.a.createElement(Be,Object.assign({},this.props,{gameStart:this.gameStart})):r.a.createElement(k,{startPressed:this.gameStart})))}}]),t}(a.Component),Qe=Object(i.b)(function(e){return{points:e.points,lifes:e.lifes,seconds:e.seconds,level:e.level,isFinished:e.isFinished,isStarted:e.isStarted}},function(e){return{onCorretAnswer:function(t){return e(function(e){e({type:"CORRECT_ANSWER",payload:{points:100,level:1}})})},onWrongAnswer:function(){return e(function(e){e({type:"REMOVE_LIVE",payload:{level:1,lives:1}})})},setTimeChanged:function(t){return e((n=t,function(e){e({type:"SET_TIME",payload:n})}));var n},onEndGame:function(){return e(g(!0))},onRetryGame:function(){return e(g(!1))},onReStartGame:function(){return e(function(e){e({type:"REBOOT_GAME"})})},onStartGame:function(){return e(function(e){e({type:"START_GAME"})})},onEarnLife:function(){return e(function(e){e({type:"EARN_LIFE"})})}}})($e),Ze=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function et(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(r.a.createElement(i.a,{store:m},r.a.createElement(Qe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/urdu_subtraction_counting_objects",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/urdu_subtraction_counting_objects","/service-worker.js");Ze?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):et(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):et(t,e)})}}()}],[[64,1,2]]]);
//# sourceMappingURL=main.bf794564.chunk.js.map