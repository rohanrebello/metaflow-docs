"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3011],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(a),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6595:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),l=["components"],r={},s="Technical Overview",p={unversionedId:"internals-of-metaflow/technical-overview",id:"internals-of-metaflow/technical-overview",title:"Technical Overview",description:"Make sure you have read Basics of Metaflow before diving into technical details below. You can find more technical details at the infrastructure level in Administrator's Guide to Metaflow. This document focuses on the Metaflow codebase.",source:"@site/docs/internals-of-metaflow/technical-overview.md",sourceDirName:"internals-of-metaflow",slug:"/internals-of-metaflow/technical-overview",permalink:"/internals-of-metaflow/technical-overview",editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/internals-of-metaflow/technical-overview.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Deploying to AWS",permalink:"/metaflow-on-aws/deploy-to-aws"},next:{title:"Testing Philosophy",permalink:"/internals-of-metaflow/testing-philosophy"}},c=[{value:"Architecture",id:"architecture",children:[],level:2},{value:"Development-Time Components",id:"development-time-components",children:[{value:"<strong>Flow</strong>",id:"flow",children:[],level:3},{value:"Graph",id:"graph",children:[],level:3},{value:"Step",id:"step",children:[],level:3},{value:"Decorators",id:"decorators",children:[],level:3},{value:"Step Code",id:"step-code",children:[],level:3}],level:2},{value:"Runtime Components",id:"runtime-components",children:[{value:"<strong>Task</strong>",id:"task",children:[],level:3},{value:"Code Package",id:"code-package",children:[],level:3},{value:"<strong>Environment</strong>",id:"environment",children:[],level:3},{value:"Runtime",id:"runtime",children:[],level:3},{value:"Datastore",id:"datastore",children:[],level:3},{value:"Metadata Provider",id:"metadata-provider",children:[],level:3}],level:2},{value:"Result-time Components",id:"result-time-components",children:[{value:"Metaflow Client",id:"metaflow-client",children:[],level:3}],level:2}],u={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"technical-overview"},"Technical Overview"),(0,i.kt)("p",null,"Make sure you have read ",(0,i.kt)("a",{parentName:"p",href:"../metaflow/basics"},"Basics of Metaflow")," before diving into technical details below. You can find more technical details at the infrastructure level in ",(0,i.kt)("a",{parentName:"p",href:"https://outerbounds.com/docs/admin"},"Administrator's Guide to Metaflow"),". This document focuses on the Metaflow codebase."),(0,i.kt)("p",null,"We wanted to build a data science platform that can make data science code usable, scalable, reproducible, and production-ready, as described in the ",(0,i.kt)("a",{parentName:"p",href:"../introduction/why-metaflow"},"Why Metaflow")," section. There are many ways to achieve these high-level goals. We took an approach designed around the following four core functions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Provide a highly usable API for structuring the code as a workflow, i.e. as a directed graph of steps (",(0,i.kt)("strong",{parentName:"li"},"usability"),")."),(0,i.kt)("li",{parentName:"ol"},"Persist an immutable snapshot of data, code, and external dependencies required to execute each step (",(0,i.kt)("strong",{parentName:"li"},"reproducibility"),")."),(0,i.kt)("li",{parentName:"ol"},"Facilitate execution of the steps in various environments, from development to production (",(0,i.kt)("strong",{parentName:"li"},"scalability"),", ",(0,i.kt)("strong",{parentName:"li"},"production-readiness"),")."),(0,i.kt)("li",{parentName:"ol"},"Record metadata about previous executions and make them easily accessible (",(0,i.kt)("strong",{parentName:"li"},"usability"),", ",(0,i.kt)("strong",{parentName:"li"},"reproducibility"),").")),(0,i.kt)("p",null,"This document gives an overview of how the core functionality is implemented."),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"Here is a high-level architecture diagram of Metaflow:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2975).Z,width:"710",height:"828"})),(0,i.kt)("p",null,"Below, we will describe the components in detail. To highlight the time-dimension which is missing from the diagram, we group the descriptions by the following phases in the development lifecycle:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Development-time, i.e. when the code gets written."),(0,i.kt)("li",{parentName:"ol"},"Runtime, i.e. when the code gets run."),(0,i.kt)("li",{parentName:"ol"},"Result-time, i.e. when the results of the run get used.")),(0,i.kt)("p",null,"Every component includes links to source files where the functionality is implemented."),(0,i.kt)("h2",{id:"development-time-components"},"Development-Time Components"),(0,i.kt)("p",null,"The core development-time concept in Metaflow is a ",(0,i.kt)("em",{parentName:"p"},"flow"),". It represents the business logic of what needs to be computed."),(0,i.kt)("p",null,"How to intertwine the business logic with the framework in the most ",(0,i.kt)("strong",{parentName:"p"},"usable")," manner is a central design concern of Metaflow. We want to encourage the user to structure the code in a way that enables ",(0,i.kt)("strong",{parentName:"p"},"reproducibility")," and ",(0,i.kt)("strong",{parentName:"p"},"scalability"),"."),(0,i.kt)("p",null,"In contrast, we would like to minimize concerns related to production-readiness during development time. Optimally, the user can write idiomatic Python code focusing on the logic itself and the guard rails of the framework will automatically make the code production-ready."),(0,i.kt)("h3",{id:"flow"},(0,i.kt)("strong",{parentName:"h3"},"Flow")),(0,i.kt)("p",null,"A flow is the smallest unit of computation that can be scheduled for execution. Typically, a flow defines a workflow that pulls data from an external source as input, processes it in several steps, and produces output data."),(0,i.kt)("p",null,"User implements a flow by subclassing ",(0,i.kt)("inlineCode",{parentName:"p"},"FlowSpec")," and implementing steps as methods. Besides steps, a flow can define other attributes relevant for scheduling, such as parameters and data triggers."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/metaflow/blob/master/metaflow/flowspec.py"},(0,i.kt)("inlineCode",{parentName:"a"},"flowspec.py")," - base class for flows"))),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("p",null,"Metaflow infers a directed (typically acyclic) graph based on the transitions between step functions."),(0,i.kt)("p",null,"Metaflow requires the transitions to be defined so that the graph can be parsed from the source code of the flow statically. This makes it possible to translate the graph for execution by runtimes that support only statically defined graphs, such as Meson."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/metaflow/blob/master/metaflow/graph.py"},(0,i.kt)("inlineCode",{parentName:"a"},"graph.py")," - internal representation of the graph")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/metaflow/blob/master/metaflow/lint.py"},(0,i.kt)("inlineCode",{parentName:"a"},"lint.py")," - verifies that the graph is valid"))),(0,i.kt)("h3",{id:"step"},"Step"),(0,i.kt)("p",null,"A step is the smallest resumable unit of computation. It is implemented by the user as a method that is decorated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@step")," decorator in a flow class."),(0,i.kt)("p",null,"A step is ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Application_checkpointing"},"a checkpoint"),". Metaflow takes a snapshot of the data produced by a step which in turn is used as input to the subsequent steps. Hence if a step fails, it can be resumed without rerunning the preceding steps."),(0,i.kt)("p",null,"Being able to resume execution is a powerful feature. It would be convenient to be able to resume execution at any arbitrary line of code. The main reason why checkpointing is done at the step level instead of line level is the overhead of saving state. The user is encouraged to keep the steps small but not so small that the overhead becomes noticeable."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/metaflow/blob/master/metaflow/flowspec.py"},(0,i.kt)("inlineCode",{parentName:"a"},"flowspec.py")," - steps belong to a flow"))),(0,i.kt)("h3",{id:"decorators"},"Decorators"),(0,i.kt)("p",null,"The behavior of a step can be modified with decorators. Tags are the main mechanism for extending Metaflow. For instance, a decorator can catch exceptions, implement a timeout, or define resource requirements for a step."),(0,i.kt)("p",null,"A step may have arbitrary many decorators, implemented as Python decorators."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/metaflow/blob/master/metaflow/decorators.py"},(0,i.kt)("inlineCode",{parentName:"a"},"decorators.py")," - base class for decorators")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/metaflow/tree/master/metaflow/plugins"},(0,i.kt)("inlineCode",{parentName:"a"},"plugins")," - see various plugins for actual decorator implementations"))),(0,i.kt)("h3",{id:"step-code"},"Step Code"),(0,i.kt)("p",null,"Step code is the body of a step. It implements the actual business logic of flow."),(0,i.kt)("p",null,"It is possible to implement various language bindings, e.g. R, for Metaflow so that only the language of the step code is changed while all the core functionality, implemented in Python, stays intact."),(0,i.kt)("p",null,"All instance variables, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"self.x"),", used in the step code become ",(0,i.kt)("em",{parentName:"p"},"data artifacts")," that are persisted automatically. Stack variables, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),", are not persisted. This dichotomy allows the user to control the overhead of checkpointing by explicitly choosing between persistent vs. non-persistent variables in the step code."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/metaflow/blob/master/metaflow/tutorials/00-helloworld/helloworld.py"},(0,i.kt)("inlineCode",{parentName:"a"},"helloworld.py")," - example of a user-defined flow"))),(0,i.kt)("h2",{id:"runtime-components"},"Runtime Components"),(0,i.kt)("p",null,"The core runtime concept in Metaflow is a ",(0,i.kt)("em",{parentName:"p"},"run"),", that is, an execution of a user-defined flow. A run happens when the user executes ",(0,i.kt)("inlineCode",{parentName:"p"},"python myflow.py run")," on the command line."),(0,i.kt)("p",null,"A key design decision of Metaflow is to make the framework runtime-agnostic. The same code should be runnable in various environments, such as on a laptop during development or on a ",(0,i.kt)("strong",{parentName:"p"},"production-ready")," workflow orchestrator during production."),(0,i.kt)("p",null,"Similarly, we want to provide seamless ",(0,i.kt)("strong",{parentName:"p"},"scalability")," by allowing the same code run on a laptop in parallel over multiple processes or in the cloud over multiple batch jobs."),(0,i.kt)("h3",{id:"task"},(0,i.kt)("strong",{parentName:"h3"},"Task")),(0,i.kt)("p",null,"The runtime counterpart of a step is a ",(0,i.kt)("em",{parentName:"p"},"task"),". In runtime, a normal step spawns one task for execution. A foreach split step may spawn multiple tasks which are identified by a unique ",(0,i.kt)("em",{parentName:"p"},"foreach stack"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/metaflow/blob/master/metaflow/task.py"},(0,i.kt)("inlineCode",{parentName:"a"},"task.py")," - manages execution of a task"))),(0,i.kt)("h3",{id:"code-package"},"Code Package"),(0,i.kt)("p",null,"In order to be able to ",(0,i.kt)("strong",{parentName:"p"},"reproduce")," the results of a run, we need to snapshot the code that was run."),(0,i.kt)("p",null,"Code package is an immutable snapshot of the relevant code in the working directory, stored in the datastore, at the time when the run was started. A convenient side-effect of the snapshot is that it also works as a code distribution mechanism for runs that happen in the cloud."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/metaflow/blob/master/metaflow/package.py"},(0,i.kt)("inlineCode",{parentName:"a"},"package.py")," - code package implementation"))),(0,i.kt)("h3",{id:"environment"},(0,i.kt)("strong",{parentName:"h3"},"Environment")),(0,i.kt)("p",null,"Unfortunately, just snapshotting the working directory of the flow code is not sufficient for reproducibility. The code often depends on external libraries which also need to be included in the snapshot."),(0,i.kt)("p",null,"The concept of an ",(0,i.kt)("em",{parentName:"p"},"environment")," is closely related to code packages. The environment encapsulates both the flow code and its external dependencies, so that the exact execution environment can be reproduced on a remote system accurately."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/metaflow/blob/master/metaflow/metaflow_environment.py"},(0,i.kt)("inlineCode",{parentName:"a"},"metaflow_environment.py")," - environment base class"))),(0,i.kt)("h3",{id:"runtime"},"Runtime"),(0,i.kt)("p",null,'A run of a flow is executed by executing tasks defined by steps in a topological order. It is the job of a runtime to orchestrate this execution. A better name for "runtime" might be a scheduler.'),(0,i.kt)("p",null,"For quick local iterations, Metaflow comes with a built-in runtime which executes tasks as separate processes. However, this is not intended as a production-grade scheduler."),(0,i.kt)("p",null,"For production runs, one should use a runtime that supports retries, error reporting, logging, is highly available, scalable, and preferably comes with a user-friendly UI. At Netflix, ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/netflix-techblog/meson-workflow-orchestration-for-netflix-recommendations-fc932625c1d9"},"Meson")," is such a runtime. It is well supported by Metaflow."),(0,i.kt)("p",null,"A key feature of Metaflow is that it is agnostic of the runtime. The same code can be executed both with the local runtime as well as with production runtime, which enables a rapid development-deploy-debug cycle."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/metaflow/blob/master/metaflow/runtime.py"},(0,i.kt)("inlineCode",{parentName:"a"},"runtime.py")," - local, process-based runtime"))),(0,i.kt)("h3",{id:"datastore"},"Datastore"),(0,i.kt)("p",null,"Metaflow requires an object store where both code snapshots as well as data artifacts can be persisted. This data store should be accessible by all environments where Metaflow code is executed. The AWS S3 is a perfect solution for this need. Secondarily, Metaflow supports using a local disk as a data store, which is mainly useful during the development of Metaflow itself."),(0,i.kt)("p",null,"An important feature of Metaflow is that the data store is used as a content-addressed storage. Both code and data are identified by a hash of their contents, similar to Git, so equal copies of data are deduplicated automatically. Note that this deduplication is limited in scope however; data across different flows will not be deduplicated."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/metaflow/blob/master/metaflow/datastore/datastore.py"},(0,i.kt)("inlineCode",{parentName:"a"},"datastore.py")," - base class for datastores")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/metaflow/blob/master/metaflow/datastore/s3.py"},(0,i.kt)("inlineCode",{parentName:"a"},"s3.py")," - default S3 datastore"))),(0,i.kt)("h3",{id:"metadata-provider"},"Metadata Provider"),(0,i.kt)("p",null,"A centralized Metadata Provider keeps track of runs. Strictly speaking, this functionality is not required by Metaflow but it makes the system much more ",(0,i.kt)("strong",{parentName:"p"},"usable.")," The service also helps to make data artifacts and other metadata about runs more discoverable during result-time, as explained below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"`","`",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/metaflow/blob/master/metaflow/metadata/metadata.py"},(0,i.kt)("inlineCode",{parentName:"a"},"metadata.py")," - base class for metadata providers")),(0,i.kt)("li",{parentName:"ul"},"`","`",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/metaflow/blob/master/metaflow/plugins/metadata/service.py"},(0,i.kt)("inlineCode",{parentName:"a"},"service.py")," - default implementation of the metadata provider")),(0,i.kt)("li",{parentName:"ul"},"`","`",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/metaflow/blob/master/metaflow/plugins/metadata/local.py"},(0,i.kt)("inlineCode",{parentName:"a"},"local.py")," - local implementation of the metadata provider"))),(0,i.kt)("h2",{id:"result-time-components"},"Result-time Components"),(0,i.kt)("p",null,"Flows are defined and run for their results. Metaflow supports a number of different ways to consume outputs of runs: Results can be written to Hive tables for consumption by downstream systems and dashboards, they can be accessed in a notebook for further analysis, or in a hosted web service (this last functionality is not yet available in Open Source)."),(0,i.kt)("h3",{id:"metaflow-client"},"Metaflow Client"),(0,i.kt)("p",null,"Metaflow provides a highly ",(0,i.kt)("strong",{parentName:"p"},"usable")," Python API to access results of previous runs, called ",(0,i.kt)("inlineCode",{parentName:"p"},"metaflow.client"),". A typical way to use ",(0,i.kt)("inlineCode",{parentName:"p"},"metaflow.client")," is to access data artifacts of past runs in a Jupyter notebook. It is extremely convenient to be able to examine the internal state of production runs or perform further ad-hoc analysis of the results in a notebook."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/metaflow/tree/master/metaflow/client"},(0,i.kt)("inlineCode",{parentName:"a"},"metaflow.client")," - client subpackage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/metaflow/blob/master/metaflow/client/core.py"},(0,i.kt)("inlineCode",{parentName:"a"},"core.py")," - core objects for the client"))))}m.isMDXComponent=!0},2975:function(e,t,a){t.Z=a.p+"assets/images/Untitled_presentation-34865e5b1cf54ada93d00a186bc75832.png"}}]);