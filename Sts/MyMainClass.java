class OuterClass {
  int x = 10;

  // Private inner class
  private class InnerClass {
      int y = 5;
  }

  // Method to access the private inner class and its field
  public int getInnerClassY() {
      InnerClass inner = new InnerClass();
      return inner.y;
  }
}

public class MyMainClass {
  public static void main(String[] args) {
      OuterClass myOuter = new OuterClass();
      int yValue = myOuter.getInnerClassY();  // Access the inner class field through a method
      System.out.println(yValue + myOuter.x); // Output the sum of x and y
  }
}
