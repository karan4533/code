public class cross
{
	public static void main(String[] args) {
	    //Scanner scan=new Scanner(System.in);
	    //String n=scan.nextLine();
	    String n="hello";
	    int length=n.length();
	    for (int i=0;i<length;i++){
	        for (int j=0;j<length;j++){
	            if (i==j || j==length-1-i){
	                System.out.print(n.charAt(j));
	            }else{
	                System.out.print(" ");
	            }
	        }
	        System.out.println("");
	    }
	}
}