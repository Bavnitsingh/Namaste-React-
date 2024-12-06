/**
 * how to make this type of heirarchy in react??
 <div id = "parent">
 <div id = "child1">
 <h1>I'm H1 tag</h1>
 <h1>I'm  another H1 tag</h1>
 </div>
 <div id = "child2">
 <h1>I'm H1 tag</h1>
 <h1>I'm another H1 tag</h1>
 </div>
 </div>
 React.createElement(object) => HTML that browser understands
 React.createElement(tag,attributes,children) where children can be a single child or an array of children
**/

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "I'm H1 tag"),
        React.createElement("h1", {}, "I'm  another H1 tag")]),
    
      React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I'm H1 tag"),
        React.createElement("h1", {}, "I'm  another H1 tag"),
      ]),
    
  ]); // Tag,Attributes,Children  TAC
  
  const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello world from react!"
  );
  // first make heading of React createElement then give three parameters
  // 1. tag name
  // 2. attributes
  // 3. children
  // Note : heading is just an object
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // then createRoot by ReactDOM
  
  // root.render(heading);
  root.render(parent);
  // then render heading by root
  // root.render just take the object named parent and put it in root.
  // suppose there is something in root tag in html then it is replaced by parent and not appended.
  
  
  console.log(parent); //object
  