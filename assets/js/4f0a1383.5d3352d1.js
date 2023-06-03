"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6975],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return t?a.createElement(m,r(r({ref:n},p),{},{components:t})):a.createElement(m,r({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1177:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const i={},r="Managing External Libraries",l={unversionedId:"scaling/dependencies",id:"scaling/dependencies",title:"Managing External Libraries",description:"What if your step code wants to import an external library? When you run Metaflow code",source:"@site/docs/scaling/dependencies.md",sourceDirName:"scaling",slug:"/scaling/dependencies",permalink:"/scaling/dependencies",draft:!1,editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/scaling/dependencies.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Accessing Secrets",permalink:"/scaling/secrets"},next:{title:"Organizing Results",permalink:"/scaling/tagging"}},s={},c=[{value:"Managing dependencies with <code>@conda</code> decorator",id:"managing-dependencies-with-conda-decorator",level:2},{value:"Local Execution",id:"local-execution",level:3},{value:"Remote Execution",id:"remote-execution",level:3},{value:"<code>@conda</code> Tips and Tricks",id:"conda-tips-and-tricks",level:3},{value:"Can I use an alternate dependency manager, given that conda can be slow at resolving dependencies?",id:"can-i-use-an-alternate-dependency-manager-given-that-conda-can-be-slow-at-resolving-dependencies",level:4},{value:"How do I specify the version of Python interpreter?",id:"how-do-i-specify-the-version-of-python-interpreter",level:4},{value:"What about storing and retrieving data artifacts between steps in my flow?",id:"what-about-storing-and-retrieving-data-artifacts-between-steps-in-my-flow",level:4},{value:"How do I specify flow-level dependencies?",id:"how-do-i-specify-flow-level-dependencies",level:4}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"managing-external-libraries"},"Managing External Libraries"),(0,o.kt)("p",null,"What if your step code wants to import an external library? When you run Metaflow code\nlocally, it behaves as any other Python code, so all libraries available to your Python\ninterpreter can be imported in steps."),(0,o.kt)("p",null,"However, a core benefit of Metaflow is that the same code can be run in different\nenvironments without modifications. Clearly this promise does not hold if a step code\ndepends on locally installed libraries. The topic of providing isolated and encapsulated\nexecution environments is a surprisingly complex one. We recommend the following\napproaches for handling external libraries, in order of preference:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If your code needs an additional Python module, for instance, a library module that\nyou wrote by yourself, you can place the file in the same directory with your flow\nfile. When Metaflow packages your code for remote execution, any ",(0,o.kt)("inlineCode",{parentName:"p"},".py")," files in the\ndirectory are included in the distribution automatically. In this case, you can\nsimply ",(0,o.kt)("inlineCode",{parentName:"p"},"import mymodule")," in the step code. This works even with packages with\nmultiple files which can be included as subdirectories.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you need a custom package that is too complex to include in the flow directory,\none approach is to install it on the fly in your step code:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"os.system('pip install my_package')\nimport my_package\n")),(0,o.kt)("p",{parentName:"li"},"This approach is, however, not encouraged for multiple reasons:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"It makes the results harder to reproduce since the version of ",(0,o.kt)("inlineCode",{parentName:"li"},"my_package")," may\nchange;"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pip install"),"ing packages on the fly is brittle, especially if performed in tasks\nrunning in parallel.")),(0,o.kt)("p",{parentName:"li"},"Instead, to define external dependencies for a step, you can instead use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@conda"),"\ndecorator which uses ",(0,o.kt)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/"},"conda")," behind the scenes."))),(0,o.kt)("h2",{id:"managing-dependencies-with-conda-decorator"},"Managing dependencies with ",(0,o.kt)("inlineCode",{parentName:"h2"},"@conda")," decorator"),(0,o.kt)("p",null,"Reproducibility is a core value of Machine Learning Infrastructure. It is hard to\ncollaborate on data science projects effectively without being able to reproduce past\nresults reliably. Metaflow tries to solve several questions related to reproducible\nresearch, principle amongst them, dependency management: how can you, the data\nscientist, specify libraries that your code needs so that the results are reproducible?"),(0,o.kt)("p",null,"Note that reproducibility and dependency management are related but separate topics. We\ncould solve either one individually. A classic ",(0,o.kt)("inlineCode",{parentName:"p"},"os.system(\u2018pip install pandas\u2019)")," is an\nexample of dependency management without reproducibility (what if the version of\n",(0,o.kt)("inlineCode",{parentName:"p"},"pandas")," changes?). On the other hand, we could make code perfectly reproducible by\nforbidding external libraries - reproducibility without dependency management."),(0,o.kt)("p",null,"Metaflow aims at solving both the questions at once: how can we handle dependencies so\nthat the results are reproducible? Specifically, it addresses the following three\nissues:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"How to make external dependencies available locally during development?"),(0,o.kt)("li",{parentName:"ol"},"How to execute code remotely on Kubernetes or AWS Batch with external dependencies?"),(0,o.kt)("li",{parentName:"ol"},"How to ensure that anyone can reproduce past results even months later?")),(0,o.kt)("p",null,"Metaflow provides an execution environment context, ",(0,o.kt)("inlineCode",{parentName:"p"},"--environment=conda"),", which runs\nevery step in a separate environment that only contains dependencies that are explicitly\nlisted as requirements for that step. The solution relies on\n",(0,o.kt)("a",{parentName:"p",href:"https://conda.io/docs/"},"Conda"),", a language-agnostic open-source package manager by the\nauthors of Numpy."),(0,o.kt)("p",null,"For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@conda(libraries={"pandas": "0.22.0"})\ndef fit_model(self):\n    ...\n')),(0,o.kt)("p",null,"The above code snippet will execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"fit_model")," step in an automatically created\nconda environment that contains only specific pinned versions of ",(0,o.kt)("inlineCode",{parentName:"p"},"Python"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Pandas"),", and\n",(0,o.kt)("inlineCode",{parentName:"p"},"Metaflow"),"(and its dependencies ",(0,o.kt)("inlineCode",{parentName:"p"},"boto3"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"click")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"requests"),"). No unspecified\nlibraries outside of the standard Python library would be available. This isolates your\ncode from any external factors, such as automatically upgrading libraries."),(0,o.kt)("p",null,"Internally, Metaflow handles automatic dependency resolution, cross-platform support,\nenvironment snapshotting and caching in Amazon S3 (if enabled). We require that all\ndependencies are pinned to a specific version. This avoids any ambiguity about the\nversion used and helps make deployments fully immutable; in other words, once you deploy\na version in production, nothing will inadvertently change its behavior without explicit\naction."),(0,o.kt)("h3",{id:"local-execution"},"Local Execution"),(0,o.kt)("p",null,"Let's look at the ",(0,o.kt)("a",{parentName:"p",href:"/metaflow/basics#linear"},"LinearFlow")," from before:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, step\n\nclass LinearFlow(FlowSpec):\n\n    @step\n    def start(self):\n        self.my_var = 'hello world'\n        self.next(self.a)\n\n    @step\n    def a(self):\n        print('the data artifact is: %s' % self.my_var)\n        self.next(self.end)\n\n    @step\n    def end(self):\n        print('the data artifact is still: %s' % self.my_var)\n\nif __name__ == '__main__':\n    LinearFlow()\n")),(0,o.kt)("p",null,"You can execute this flow in a conda environment by executing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ python LinearFlow.py --environment=conda run\n")),(0,o.kt)("p",null,"Metaflow will bootstrap a dedicated conda environment for each of the steps of the\nworkflow, executing each of them in that isolated environment, resulting in an output\nlike this -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"2019-11-27 20:04:27.579 Bootstrapping conda environment...(this could take a few minutes)\n2019-11-27 20:05:13.623 Workflow starting (run-id 164):\n2019-11-27 20:05:14.273 [164/start/4222215 (pid 14011)] Task is starting.\n2019-11-27 20:05:16.426 [164/start/4222215 (pid 14011)] Task finished successfully.\n2019-11-27 20:05:17.246 [164/a/4222216 (pid 14064)] Task is starting.\n2019-11-27 20:05:19.014 [164/a/4222216 (pid 14064)] the data artifact is: hello world\n2019-11-27 20:05:19.484 [164/a/4222216 (pid 14064)] Task finished successfully.\n2019-11-27 20:05:20.192 [164/end/4222217 (pid 14117)] Task is starting.\n2019-11-27 20:05:21.756 [164/end/4222217 (pid 14117)] the data artifact is still: hello world\n2019-11-27 20:05:22.436 [164/end/4222217 (pid 14117)] Task finished successfully.\n2019-11-27 20:05:22.512 Done!\n")),(0,o.kt)("p",null,"You might notice some delay when you execute this flow for the first time, as Metaflow\nperforms dependency resolution, creates the environments and caches the results.\nSubsequent executions rely on this cache to reduce this overhead going forward."),(0,o.kt)("p",null,"Let\u2019s import the module ",(0,o.kt)("inlineCode",{parentName:"p"},"sklearn")," in one of the steps -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, step\n\nclass LinearFlow(FlowSpec):\n\n    @step\n    def start(self):\n        import sklearn\n        self.my_var = 'hello world'\n        self.next(self.a)\n\n    @step\n    def a(self):\n        print('the data artifact is: %s' % self.my_var)\n        self.next(self.end)\n\n    @step\n    def end(self):\n        print('the data artifact is still: %s' % self.my_var)\n\nif __name__ == '__main__':\n    LinearFlow()\n")),(0,o.kt)("p",null,"Let's execute this flow in a conda environment, again, by executing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ python LinearFlow.py --environment=conda run\n")),(0,o.kt)("p",null,"You will notice that the execution progresses fairly quickly compared to before since\nall the specified dependencies are already cached locally, but the flow fails at step\n",(0,o.kt)("inlineCode",{parentName:"p"},"start"),", with the error ",(0,o.kt)("inlineCode",{parentName:"p"},"`ModuleNotFoundError: No module named \u2018sklearn\u2019`"),", even\nthough you might have the module installed locally already."),(0,o.kt)("p",null,"You can add an explicit dependency on the module ",(0,o.kt)("inlineCode",{parentName:"p"},"sklearn")," by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@conda"),"\ndecorator in the ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," step -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, step, conda\n\nclass LinearFlow(FlowSpec):\n\n    @conda(libraries={'scikit-learn':'0.21.1'})\n    @step\n    def start(self):\n        import sklearn\n        self.my_var = 'hello world'\n        self.next(self.a)\n\n    @step\n    def a(self):\n        print('the data artifact is: %s' % self.my_var)\n        self.next(self.end)\n\n    @step\n    def end(self):\n        print('the data artifact is still: %s' % self.my_var)\n\nif __name__ == '__main__':\n    LinearFlow()\n")),(0,o.kt)("p",null,"Let\u2019s execute this flow, in the conda environment again -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ python LinearFlow.py --environment=conda run\n")),(0,o.kt)("p",null,"You will notice that bootstrapping takes a little bit longer than before as we pull in\nthe new set of dependencies (",(0,o.kt)("inlineCode",{parentName:"p"},"scikit-learn")," ",(0,o.kt)("inlineCode",{parentName:"p"},"0.21.1")," and its dependencies) and the flow\nsucceeds. ",(0,o.kt)("inlineCode",{parentName:"p"},"scikit-learn 0.21.1")," is only available to the step ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," and no other step."),(0,o.kt)("p",null,"Every subsequent execution of your flow is guaranteed to execute in the same environment\nunless you explicitly make a change to the contrary. Behind the scenes, we resolve the\ndependencies you have specified in your steps and cache both the resolution order and\ndependencies (stated and transitive) locally and on Amazon S3 to be used for subsequent\nexecutions. We do this to isolate your code from changes not related to your code. This\nalso allows for isolation between runs, you should be able to use a different version of\ntensorflow for different flows and even across different steps of the same flow if that\nsuits your use-case."),(0,o.kt)("h3",{id:"remote-execution"},"Remote Execution"),(0,o.kt)("p",null,"You can execute your flow on Kubernetes or AWS Batch, like before -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ python LinearFlow.py --environment=conda run --with kubernetes\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ python LinearFlow.py --environment=conda run --with batch\n")),(0,o.kt)("p",null,"Since we cache the exact set of dependencies (stated and transitive) for your flow in\nAmazon S3, you are not at the mercy of an upstream package repository and can avoid\noverwhelming it, particularly while running multiple parallel tasks, while being\nguaranteed the same execution environment locally, on Kubernetes and on AWS Batch."),(0,o.kt)("p",null,"Note that, the exact set of dependencies and their behavior might differ between an\nexecution on macOS (darwin) and on Kubernetes/AWS Batch (linux)."),(0,o.kt)("h3",{id:"conda-tips-and-tricks"},(0,o.kt)("inlineCode",{parentName:"h3"},"@conda")," Tips and Tricks"),(0,o.kt)("h4",{id:"can-i-use-an-alternate-dependency-manager-given-that-conda-can-be-slow-at-resolving-dependencies"},"Can I use an alternate dependency manager, given that conda can be slow at resolving dependencies?"),(0,o.kt)("p",null,"By default, Metaflow relies on conda for dependency resolution but for many data science\npackages, conda can be quite slow for ",(0,o.kt)("a",{parentName:"p",href:"https://docs.conda.io/projects/conda/en/latest/user-guide/concepts/conda-performance.html#conda-performance"},"a variety of different\nreasons"),".\n",(0,o.kt)("a",{parentName:"p",href:"https://mamba.readthedocs.io/en/latest/"},"Mamba")," is another cross-platform package\nmanager that is fully compatible with conda packages and ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/68043228/6510628"},"offers better performance and\nreliability compared to conda"),". You can\nuse mamba instead of conda by setting the environment variable\n",(0,o.kt)("inlineCode",{parentName:"p"},"METAFLOW_CONDA_DEPENDENCY_RESOLVER=mamba")," either in your execution environment or\ninside your metaflow config (usually located at ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.metaflowconfig/"),")."),(0,o.kt)("h4",{id:"how-do-i-specify-the-version-of-python-interpreter"},"How do I specify the version of Python interpreter?"),(0,o.kt)("p",null,"By default, we take the version of the Python interpreter with which you invoke your\nflow. You can override it whatever version you choose, e.g, ",(0,o.kt)("inlineCode",{parentName:"p"},"@conda(python='3.6.5')"),"."),(0,o.kt)("h4",{id:"what-about-storing-and-retrieving-data-artifacts-between-steps-in-my-flow"},"What about storing and retrieving data artifacts between steps in my flow?"),(0,o.kt)("p",null,"Metaflow relies on pickle for object serialization/deserialization. Make sure you have\ncompatible versions (ideally the same version) of the object module as a dependency in\nyour steps which rely on interacting with this object artifact."),(0,o.kt)("h4",{id:"how-do-i-specify-flow-level-dependencies"},"How do I specify flow-level dependencies?"),(0,o.kt)("p",null,"Using the flow-level ",(0,o.kt)("inlineCode",{parentName:"p"},"@conda_base")," decorator you can specify, for the flow, explicit\nlibrary dependencies, python version and also if you want to exclude all steps from\nexecuting within a conda environment. Some examples -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@conda_base(libraries={'numpy':'1.15.4'}, python=\u20193.6.5\u2019)\nclass LinearFlow(FlowSpec):\n    ...\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@conda_base(disabled=True)\nclass LinearFlow(FlowSpec):\n    ...\n")),(0,o.kt)("p",null,"Step-level ",(0,o.kt)("inlineCode",{parentName:"p"},"@conda")," decorators, for the step, will directly update the explicit library\ndependencies, python version, and conda environment exclusion as specified by the\n",(0,o.kt)("inlineCode",{parentName:"p"},"@conda_base")," decorator. Some examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, step, conda, conda_base\n\n@conda_base(libraries={'numpy':'1.15.4'}, python='3.6.5')\nclass MyFlow(FlowSpec):\n    @step\n    def a(self):\n       ...\n\n    @conda(libraries={'numpy':'1.16.3'})\n    @step\n    def b(self):\n       ...\n\n    @conda(disabled=True)\n    @step\n    def c(self):\n       ...\n")),(0,o.kt)("p",null,"In this example, step ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," executes in the environment ",(0,o.kt)("inlineCode",{parentName:"p"},"libraries={'numpy':'1.15.4'},\npython=\u20193.6.5\u2019"),", step ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," executes in the environment ",(0,o.kt)("inlineCode",{parentName:"p"},"libraries={'numpy':'1.16.3'},\npython=\u20193.6.5\u2019"),", while step ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," executes outside the conda environment in the user\nenvironment."))}d.isMDXComponent=!0}}]);