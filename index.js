import {defaultEquals} from "./util.js";
import {Node} from "./linked.js";
export default class LinkedList{
	constructor(equalsFn = defaultEquals){
		this.count =0;
		this.head = undefined;
		this.equalsFn = equalsFn;
	}
	push(element){
		const node = new Node(element);
		let current;
		if(this.head == null){
			this.head = node;
		}else{
			current = this.head;
			while(current.next != null){
				current = current.next;
			}
			current.next = node;
		}
		this.count++;
	}
	display(){
		let current = this.head;
		let result = {};
		let index =0;
		while(current !=null){
			result[index] = current.element;
			current = current.next;
			index++;
		}
		console.log(result);
	}
	removeAt(index){
		if(index >=  0 && index < this.count){
			let current = this.head;
			if(index === 0){
				this.head = current.next;
			}
			else{
				let preveious;
				for(let i=0; i < index;i++){
					preveious = current;
					current = current.next;
				}
				preveious.next = current.next;
			}
			this.count--;
			return current.element;
		}
		return undefined;
	}
	geElementAt(index){
		if(index >= 0 && index <= this.count){
			let node = this.head;
			for(let i=0; i < index && node != null; i++){
				node = node.next;
			}
			return node;
		}
		return undefined;
	}
	insert(element,index){
		if(index >= 0 && index <= this.count){
			const node = new Node(element);
			if(index === 0){
				const current = this.head;
				node.next = current;
				this.head = node;

			}else{
				const preveious = this.geElementAt(index -1);
				const current = preveious.next;
				node.next = current;
				preveious.next = node;
			}
			this.count++;
			return true;
		}
		return false;
	}

} 