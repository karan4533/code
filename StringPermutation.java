import java.util.ArrayList;
import java.util.List;

public class StringPermutation {
    public static void main(String[] args) {
        String str = "kar";
        List<String> permutations = new ArrayList<>();
        generatePermutations(str, "", permutations);
        System.out.println("Permutations: " + permutations);
    }

    public static void generatePermutations(String str, String prefix, List<String> result) {
        if (str.isEmpty()) {
            result.add(prefix);
        } else {
            for (int i = 0; i < str.length(); i++) {
                char ch = str.charAt(i);
                String remaining = str.substring(0, i) + str.substring(i + 1);
                generatePermutations(remaining, prefix + ch, result);
            }
        }
    }
}
