class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// function addTwoNumbers(
//   l1: ListNode | null,
//   l2: ListNode | null
//   //@ts-ignore
// ): ListNode | null {
//   const runOnList = (listNode: ListNode, index = 1, finleValue = 1): number => {
//     let returnValue;
//     if (listNode.next) {
//       returnValue += runOnList(listNode.next, index * 10, finleValue);
//     } else {
//       return index * listNode.val + returnValue;
//     }
//   };
//   console.log(runOnList(l1));
// }

function addTwoNumbers(
  l1: ListNode | null,
  l2?: ListNode | null
  //@ts-ignore
): ListNode | null {
  const runOnList = (
    listNode: ListNode | null,
    index = 1,
    finleValue = 0
  ): number => {
    while (listNode) {
      finleValue += listNode.val * index;
      index *= 10;
      listNode = listNode.next;
    }
    return finleValue;
  };
  //@ts-ignore
  return runOnList(l1);
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
console.log("starting");
console.log(addTwoNumbers(l1));
