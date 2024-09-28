export const QuizData = {
  categories: [
    {
      id: "js_basics",
      name: "JavaScript Basics",
      questions: [
        {
          id: "q1",
          question:
            "What is the correct syntax for referring to an external script called 'script.js'?",
          options: [
            "A. <script name='script.js'>",
            "B. <script href='script.js'>",
            "C. <script src='script.js'>",
            "D. <script file='script.js'>",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q2",
          question: "Which company developed JavaScript?",
          options: ["A. Microsoft", "B. Netscape", "C. Google", "D. Mozilla"],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q3",
          question:
            "Which of the following is not a valid JavaScript data type?",
          options: ["A. Number", "B. Boolean", "C. Float", "D. Undefined"],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q4",
          question:
            "Which method is used to convert JSON data to a JavaScript object?",
          options: [
            "A. JSON.parse()",
            "B. JSON.stringify()",
            "C. JSON.convert()",
            "D. JSON.toObject()",
          ],
          correctAnswer: "A",
          timeLimit: 10,
        },
        {
          id: "q5",
          question: "What is the result of the following expression: '5' + 3?",
          options: ["A. 8", "B. 53", "C. Error", "D. Undefined"],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q6",
          question: "What is a closure in JavaScript?",
          options: [
            "A. A function inside another function",
            "B. A function with no arguments",
            "C. A variable outside the function",
            "D. A function bundled with its lexical environment",
          ],
          correctAnswer: "D",
          timeLimit: 10,
        },
        {
          id: "q7",
          question: "What keyword is used to declare a constant in JavaScript?",
          options: ["A. let", "B. var", "C. const", "D. static"],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q8",
          question: "How do you create a function in JavaScript?",
          options: [
            "A. function = myFunction()",
            "B. function myFunction()",
            "C. create myFunction()",
            "D. def myFunction()",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q9",
          question: "How can you add a comment in JavaScript?",
          options: [
            "A. <!-- This is a comment -->",
            "B. /* This is a comment */",
            "C. // This is a comment",
            "D. Both B and C",
          ],
          correctAnswer: "D",
          timeLimit: 10,
        },
        {
          id: "q10",
          question:
            "Which symbol is used for strict equality comparison in JavaScript?",
          options: ["A. ==", "B. ===", "C. =>", "D. <=>"],
          correctAnswer: "B",
          timeLimit: 10,
        },
      ],
    },
    {
      id: "react_advanced",
      name: "React Advanced",
      questions: [
        {
          id: "q1",
          question:
            "Which React hook is used to handle side effects in functional components?",
          options: [
            "A. useState",
            "B. useEffect",
            "C. useContext",
            "D. useReducer",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q2",
          question:
            "How can you memoize a component in React to prevent unnecessary re-renders?",
          options: [
            "A. React.memo()",
            "B. React.useEffect()",
            "C. React.useCallback()",
            "D. React.useState()",
          ],
          correctAnswer: "A",
          timeLimit: 10,
        },
        {
          id: "q3",
          question: "What is the purpose of useReducer hook in React?",
          options: [
            "A. To manage state in a complex component",
            "B. To handle asynchronous side effects",
            "C. To provide routing capabilities",
            "D. To memoize a function",
          ],
          correctAnswer: "A",
          timeLimit: 10,
        },
        {
          id: "q4",
          question: "What does React.Fragment allow you to do?",
          options: [
            "A. Send network requests",
            "B. Return multiple elements without a wrapping element",
            "C. Use the useState hook",
            "D. Cache components",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q5",
          question:
            "What hook would you use for performance optimization by caching a function?",
          options: [
            "A. useMemo",
            "B. useEffect",
            "C. useCallback",
            "D. useRef",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q6",
          question:
            "Which method is used to update the state in a class-based React component?",
          options: [
            "A. this.changeState()",
            "B. this.setState()",
            "C. this.state()",
            "D. this.updateState()",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q7",
          question: "How do you pass props in React?",
          options: [
            "A. Using the prop keyword",
            "B. Using the this.props method",
            "C. By passing as attributes in JSX",
            "D. By calling props.send()",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q8",
          question: "What is React.lazy used for?",
          options: [
            "A. Rendering JSX templates",
            "B. Lazy loading components",
            "C. Memoizing components",
            "D. Creating state variables",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q9",
          question: "What context API is primarily used for?",
          options: [
            "A. Routing",
            "B. Styling components",
            "C. Sharing state globally in the app",
            "D. Sending HTTP requests",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q10",
          question:
            "Which lifecycle method is invoked after a component is rendered?",
          options: [
            "A. componentDidMount",
            "B. componentWillUnmount",
            "C. shouldComponentUpdate",
            "D. getDerivedStateFromProps",
          ],
          correctAnswer: "A",
          timeLimit: 10,
        },
      ],
    },
    {
      id: "flutter",
      name: "Flutter",
      questions: [
        {
          id: "q1",
          question: "What is Flutter?",
          options: [
            "A. A framework for building iOS apps only",
            "B. A framework for building cross-platform applications",
            "C. A JavaScript framework",
            "D. A back-end server technology",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q2",
          question: "What programming language is used to write Flutter apps?",
          options: ["A. Java", "B. JavaScript", "C. Dart", "D. Python"],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q3",
          question: "What is a widget in Flutter?",
          options: [
            "A. A class that provides two-way data binding",
            "B. The building block of a Flutter UI",
            "C. A feature to manage application state",
            "D. A package for handling HTTP requests",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q4",
          question:
            "Which of the following widgets is used to create a scrollable list in Flutter?",
          options: ["A. ListView", "B. Column", "C. Stack", "D. Row"],
          correctAnswer: "A",
          timeLimit: 10,
        },
        {
          id: "q5",
          question: "How does Flutter handle layouts?",
          options: [
            "A. With HTML and CSS",
            "B. By writing custom native code",
            "C. By composing widgets that control layout",
            "D. Using Java classes",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q6",
          question: "Which command is used to create a new Flutter project?",
          options: [
            "A. flutter run",
            "B. flutter init",
            "C. flutter create",
            "D. flutter start",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q7",
          question: "What is a StatefulWidget in Flutter?",
          options: [
            "A. A widget that doesn’t hold any state",
            "B. A widget that can maintain and update its state",
            "C. A widget responsible for handling HTTP requests",
            "D. A widget for managing layouts",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q8",
          question: "What is hot reload in Flutter?",
          options: [
            "A. A feature to reload your server",
            "B. A feature to restart the app without saving state",
            "C. A feature that allows you to quickly see changes in the app without restarting the app",
            "D. A feature to update Flutter version",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q9",
          question: "Which widget is used to arrange other widgets vertically?",
          options: ["A. Row", "B. Column", "C. GridView", "D. ListTile"],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q10",
          question:
            "Which method is called when the state of a StatefulWidget is created?",
          options: ["A. initState", "B. build", "C. setState", "D. dispose"],
          correctAnswer: "A",
          timeLimit: 10,
        },
      ],
    },
    {
      id: "angular_basic",
      name: "Angular Basic",
      questions: [
        {
          id: "q1",
          question: "What is Angular mainly used for?",
          options: [
            "A. Building desktop applications",
            "B. Building web applications",
            "C. Building mobile applications",
            "D. Data analysis",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q2",
          question: "What is a directive in Angular?",
          options: [
            "A. A class responsible for rendering the UI",
            "B. A command to fetch data",
            "C. A way to send HTTP requests",
            "D. A feature for two-way binding",
          ],
          correctAnswer: "A",
          timeLimit: 10,
        },
        {
          id: "q3",
          question: "Which decorator is used to define a component in Angular?",
          options: [
            "A. @Service",
            "B. @NgModule",
            "C. @Directive",
            "D. @Component",
          ],
          correctAnswer: "D",
          timeLimit: 10,
        },
        {
          id: "q4",
          question:
            "Which Angular feature is responsible for handling forms and input validation?",
          options: [
            "A. Angular Router",
            "B. Angular CLI",
            "C. Reactive Forms",
            "D. Directives",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q5",
          question: "What is Angular CLI mainly used for?",
          options: [
            "A. Running tests",
            "B. Writing TypeScript code",
            "C. Creating and managing Angular projects",
            "D. Styling components",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q6",
          question: "What is the purpose of Angular Router?",
          options: [
            "A. Handling HTTP requests",
            "B. Managing component dependencies",
            "C. Implementing navigation and routing in the app",
            "D. Optimizing performance",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q7",
          question:
            "Which lifecycle hook is triggered once, after Angular has initialized all data-bound properties?",
          options: [
            "A. ngOnInit",
            "B. ngOnChanges",
            "C. ngDoCheck",
            "D. ngAfterViewInit",
          ],
          correctAnswer: "A",
          timeLimit: 10,
        },
        {
          id: "q8",
          question: "Which Angular module is required to handle HTTP requests?",
          options: [
            "A. FormsModule",
            "B. HttpClientModule",
            "C. BrowserModule",
            "D. RouterModule",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q9",
          question:
            "What is the primary language used for building Angular applications?",
          options: ["A. Java", "B. TypeScript", "C. JavaScript", "D. C#"],
          correctAnswer: "B",
          timeLimit: 10,
        },
        {
          id: "q10",
          question: "What is the purpose of the 'ngFor' directive?",
          options: [
            "A. To bind data to a form",
            "B. To apply a structural directive for looping over data",
            "C. To manage event listeners",
            "D. To initialize an Angular service",
          ],
          correctAnswer: "B",
          timeLimit: 10,
        },
      ],
    },
  ],
};
