(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?r.a.createElement(h,c(c({ref:t},p),{},{components:n})):r.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),a=(n(0),n(127)),i={id:"getting-started",title:"Getting Started",slug:"/getting-started"},c={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"There are three different ways to get started with Cloud Carbon Footprint:",source:"@site/docs/GettingStarted.md",slug:"/getting-started",permalink:"/docs/getting-started",version:"current",sidebar:"tryNowSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Create an App",permalink:"/docs/create-app"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create your Cloud Carbon Footprint App",id:"create-your-cloud-carbon-footprint-app",children:[]},{value:"Configuring the App Locally",id:"configuring-the-app-locally",children:[{value:"Clone the repository",id:"clone-the-repository",children:[]},{value:"Guided Install",id:"guided-install",children:[]},{value:"Standard Install",id:"standard-install",children:[]},{value:"Starting the App",id:"starting-the-app",children:[]},{value:"Optional Prerequisites",id:"optional-prerequisites",children:[]}]},{value:"Run Cloud Carbon Footprint in an ephemeral workspace",id:"run-cloud-carbon-footprint-in-an-ephemeral-workspace",children:[{value:"Using the hosted service",id:"using-the-hosted-service",children:[]},{value:"Using a self-hosted instance of gitpod",id:"using-a-self-hosted-instance-of-gitpod",children:[]}]}],p={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are three different ways to get started with Cloud Carbon Footprint:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a standalone app using the command line interface"),Object(a.b)("li",{parentName:"ul"},"Clone the Cloud Carbon Footprint repository"),Object(a.b)("li",{parentName:"ul"},"Run Cloud Carbon Footprint in an ephemeral workspace with a hosted development environment provider")),Object(a.b)("p",null,"For the best way of staying up to date with the project, you can create a standalone app for simple customization according to your needs. This method uses the @cloud-carbon-footprint packages as npm dependencies, making for a more lightweight standalone app."),Object(a.b)("p",null,"Forking and cloning the repository is the best way to contribute to the project. Cloning the project will include all of the @cloud-carbon-footprint packages for local development and configuration. This path offers the option to create Pull Requests and to stay up to date with the latest changes."),Object(a.b)("p",null,"If you want to run project in a disposable development environment to see how Cloud Carbon Footprint works, and make changes, you can spin up an environment with Gitpod, a hosted service. This will be running a development environment on ",Object(a.b)("em",{parentName:"p"},"Gitpod's")," infrastructure - bear this in mind when testing it out with any cloud provider credentials."),Object(a.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Git")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Node.js >= 14.18.1 (tip: use ",Object(a.b)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," or ",Object(a.b)("a",{parentName:"p",href:"https://github.com/tj/n"},"n")," to manage multiple Node versions)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Yarn (latest)"))),Object(a.b)("h2",{id:"create-your-cloud-carbon-footprint-app"},"Create your Cloud Carbon Footprint App"),Object(a.b)("p",null,"We provide the @cloud-carbon-footprint/create-app package to create standalone instances of Cloud Carbon Footprint."),Object(a.b)("p",null,"This option offers a quick setup, but has @cloud-carbon-footprint packages as dependencies. This means you will inherit the core estimation logic, but will have less freedom over customizing that logic. If you want to explore linking in local Cloud Carbon Footprint packages to your created app, you can refer to ",Object(a.b)("a",{parentName:"p",href:"/docs/create-app#linking-in-local-cloud-carbon-footprint-packages"},"this section"),"."),Object(a.b)("p",null,"Using npx, you can then run the following command to create an app within your current working directory:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npx @cloud-carbon-footprint/create-app\n")),Object(a.b)("p",null,"You can read more about this process in ",Object(a.b)("a",{parentName:"p",href:"/docs/create-app"},"Create an app"),"."),Object(a.b)("h2",{id:"configuring-the-app-locally"},"Configuring the App Locally"),Object(a.b)("p",null,"This option has more visibility and control over configuring the application, but requires a more manual setup process than using the create-app command."),Object(a.b)("p",null,"You can fork and clone ",Object(a.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint"},"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint")," in order to make changes to the core project's packages or project documentation."),Object(a.b)("p",null,"This will let you run the latest code off of the trunk branch, fix bugs or contribute new features, run test suites, etc."),Object(a.b)("p",null,"You can read more about contributing to the project in our ",Object(a.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/CONTRIBUTING.md"},"CONTRIBUTING")," guide."),Object(a.b)("p",null,"In order to run Cloud Carbon Footprint locally, there are a few things you must do to get set up first."),Object(a.b)("h3",{id:"clone-the-repository"},"Clone the repository"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"git clone --branch latest https://github.com/cloud-carbon-footprint/cloud-carbon-footprint.git\ncd cloud-carbon-footprint\n")),Object(a.b)("h3",{id:"guided-install"},"Guided Install"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"yarn install && yarn guided-install\n")),Object(a.b)("p",null,"This will install dependencies for all packages, then guide you through setting up credentials and environment variables to analyze the footprint of your AWS, GCP, or Azure account."),Object(a.b)("p",null,"If you have any problems with the guided install, you can instead choose to do a standard install."),Object(a.b)("h3",{id:"standard-install"},"Standard Install"),Object(a.b)("p",null,"A standard installation gives you more visibility and control around your particular setup."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"yarn install\n")),Object(a.b)("p",null,"You can now continue by running with ",Object(a.b)("a",{parentName:"p",href:"/docs/run-with-mocked-data"},"mocked data")," or ",Object(a.b)("a",{parentName:"p",href:"/docs/aws"},"manually configuring your cloud providers")),Object(a.b)("h3",{id:"starting-the-app"},"Starting the App"),Object(a.b)("p",null,"Now you can start the app using:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"yarn start\n")),Object(a.b)("p",null,"As you get more experienced with the app, in future you can run just the frontend with ",Object(a.b)("inlineCode",{parentName:"p"},"yarn start-client")," in one window, and the backend with ",Object(a.b)("inlineCode",{parentName:"p"},"yarn start-api")," in a different window."),Object(a.b)("h3",{id:"optional-prerequisites"},"Optional Prerequisites"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," (to download the AWS CLI)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"AWS CLI ",Object(a.b)("inlineCode",{parentName:"p"},"brew install awscli")," (if you are authenticating with AWS - see below)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Talisman (if you want to commit code)"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  curl --silent https://raw.githubusercontent.com/thoughtworks/talisman/master/global_install_scripts/install.bash > /tmp/install_talisman.bash && /bin/bash /tmp/install_talisman.bash\n")))),Object(a.b)("p",null,"Note:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"During install, Talisman may fail to add the pre-commit hook to this repository because one already exists for Husky. This is fine because it can still execute in the existing husky pre-commit hook, once installed.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"During install, Talisman will also ask you for the directory of your git repositories. If you don't want to install Talisman in all your git repos, then cancel out at this step."))),Object(a.b)("h2",{id:"run-cloud-carbon-footprint-in-an-ephemeral-workspace"},"Run Cloud Carbon Footprint in an ephemeral workspace"),Object(a.b)("p",null,"If you want to spin up an temporary development environment for Cloud Carbon Footprint, you can use Gitpod, an open source service for creating disposable environments to work on software projects."),Object(a.b)("h3",{id:"using-the-hosted-service"},"Using the hosted service"),Object(a.b)("p",null,"If you have an account on ",Object(a.b)("a",{parentName:"p",href:"https://gitpod.io"},"https://gitpod.io"),", you can open a workspace for the cloud carbon footprint project by following the link in your browser of the form ",Object(a.b)("inlineCode",{parentName:"p"},"https://gitpod.io/#project-url-on-github")),Object(a.b)("p",null,"So for Cloud Carbon Footprint, you would visit:"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://gitpod.io/#https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/"},"https://gitpod.io/#https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/")),Object(a.b)("p",null,"This will run through the steps outlined in the documentation below and install the necessary dependencies for the project, then open an instance of VS Code in your browser that you can work on immediately."),Object(a.b)("p",null,"If you want to check out a specific branch, or open a workspace for specific pull request or issue, add the full url for the issue or pull request you are interested in. A workspace will be created with the corresponding branch already checked out, that you can share with others to pair in, and use git to commit changes, before pushing your changes to the relevant the branch. "),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://gitpod.io/#https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/pull/513"},"https://gitpod.io/#https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/pull/513"),"\n",Object(a.b)("a",{parentName:"p",href:"https://gitpod.io/#https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/tree/recs-filter"},"https://gitpod.io/#https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/tree/recs-filter")),Object(a.b)("p",null,"Shortly after you close the browser tab for your workspace, Gitpod will tear down and delete the workspace. For more information, please consult the ",Object(a.b)("a",{parentName:"p",href:"https://www.gitpod.io/docs/"},"Gitpod docs")),Object(a.b)("h3",{id:"using-a-self-hosted-instance-of-gitpod"},"Using a self-hosted instance of gitpod"),Object(a.b)("p",null,"If you need to, you can run also run Gitpod on your own infrastructure, and use it to connect to source code repositories other than GitHub. ",Object(a.b)("a",{parentName:"p",href:"https://www.gitpod.io/docs/self-hosted/latest"},"Doing so is well documented"),", but beyond the scope of the docs for this project."))}s.isMDXComponent=!0}}]);