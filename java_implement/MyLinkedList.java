import java.util.NoSuchElementException;

public class MyLinkedList<E> {
  final private Node<E> head, tail;
  private int size;

  private class Node<E> {
    private E data;
    private Node<E> next;
    private Node<E> prev;

    public Node(E data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }

  public MyLinkedList() {
    head = new Node<E>(null);
    tail = new Node<E>(null);
    head.next = tail;
    tail.prev = head;
    size = 0;
  }

  private boolean isElementIndex(int index) {
    return index >= 0 && index < size;
  }

  private boolean isPositionIndex(int index) {
    return index >= 0 && index <= size;
  }

  private void checkElementIndex(int index) {
    if (!isElementIndex(index)) {
      throw new NoSuchElementException("Index: " + index + ", Size: " + size);
    }
  }

  private void checkPositionIndex(int index) {
    if (!isPositionIndex(index)) {
      throw new NoSuchElementException("Index: " + index + ", Size: " + size);
    }
  }

  public Node<E> getNode(int index) {
    checkElementIndex(index);
    Node<E> cur = head.next;
    for (int i = 0; i < index; i++) {
      cur = cur.next;
    }
    return cur;
  }

  // addAtIndex an element
  public void addAtTail(E e) {
    Node<E> newNode = new Node<E>(e);
    Node<E> last = tail.prev;
    last.next = newNode;
    newNode.next = tail;
    newNode.prev = last;
    tail.prev = newNode;
    size++;
  }

  public void addAtHead(E e) {
    Node<E> newNode = new Node<E>(e);
    newNode.next = head.next;
    newNode.prev = head;
    head.next.prev = newNode;
    head.next = newNode;
    size++;
  }

  public void addAtIndex(int index, E e) {
    checkPositionIndex(index);
    Node<E> newNode = new Node<E>(e);
    Node<E> cur = getNode(index);
    Node<E> curPrev = cur.prev;
    newNode.prev = curPrev;
    curPrev.next = newNode;
    newNode.next = cur;
    cur.prev = newNode;
    size++;
  }

  public E deleteAtIndex(int index) {
    checkElementIndex(index);
    Node<E> deleteNode = getNode(index);
    deleteNode.prev.next = deleteNode.next;
    deleteNode.next.prev = deleteNode.prev;
    size--;
    return deleteNode.data;
  }

  public E removeFirst() {
    checkElementIndex(0);
    Node<E> delNode = head.next;
    Node<E> delNodeNext = delNode.next;
    head.next = delNodeNext;
    delNodeNext.prev = head;

    delNode.next = null;
    delNode.prev = null;

    size--;
    return delNode.data;
  }

  public E removeLast() {
    if (size < 1) {
      throw new NoSuchElementException();
    }

    Node<E> delNode = tail.prev;
    Node<E> delNodePrev = delNode.prev;
    tail.prev = delNodePrev;
    delNodePrev.next = tail;

    delNode.prev = null;
    delNode.next = null;

    size--;
    return delNode.data;
  }

  public E get(int index) {
    checkElementIndex(index);
    Node<E> cur = getNode(index);

    return cur.data;
  }

  public E getFirst() {
    checkElementIndex(0);
    return head.next.data;
  }

  public E getLast() {
    if (size < 1) {
      throw new NoSuchElementException();
    }
    return tail.prev.data;
  }

  /**
   * 
   * @param index
   * @param e
   * @return oldVal
   */
  public E set(int index, E e) {
    checkElementIndex(index);
    Node<E> cur = getNode(index);
    E oldVal = cur.data;
    cur.data = e;
    return oldVal;
  }

  public int size() {
    return size;
  }

  public boolean isEmpty() {
    return size == 0;
  }

  private void display() {
    System.out.println("size = " + size);
    for (Node<E> p = head.next; p != tail; p = p.next) {
      System.out.print(p.data + " <-> ");
    }
    System.out.println("null");
    System.out.println();
  }

  public static void main(String[] args) {
    MyLinkedList<Integer> list = new MyLinkedList<>();
    list.addAtTail(1);
    list.addAtTail(2);
    list.addAtTail(3);
    list.addAtHead(0);
    list.addAtIndex(2, 100);
    list.display();
    // size = 5
    // 0 <-> 1 <-> 100 <-> 2 <-> 3 <-> null

    list.removeFirst();
    list.deleteAtIndex(2);

    list.display();
    // size = 3
    // 1 <-> 100 <-> 3 <-> null
  }
}