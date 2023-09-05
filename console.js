import LinkedList from "./index.js";
const linked = new LinkedList();
linked.push(15);
linked.push(10);
linked.push(13);
linked.push(40);
linked.insert(100,0);
linked.insert(200,4);
linked.insert(300,5);
linked.insert(600,3);
/*
console.log(linked.geElementAt(3));
console.log(linked.geElementAt(0));
console.log(linked.geElementAt(1));
console.log(linked.geElementAt(2));
*/
//linked.removeAt(3);
linked.display();