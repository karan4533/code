import java.util.StringTokenizer;

public class revision2 {
    public static void main(String[] args) {
        // StringBuffer Example
        StringBuffer sb = new StringBuffer("Hello");
        sb.append(" World!");
        System.out.println("StringBuffer: " + sb);

        // StringBuilder Example
        StringBuilder sb2 = new StringBuilder("Hello");
        sb2.append(" World!");
        System.out.println("StringBuilder: " + sb2);

        // StringTokenizer Example
        StringTokenizer st = new StringTokenizer("Java is fun", " ");
        while (st.hasMoreTokens()) {
            System.out.println(st.nextToken());
        }
    }
}
