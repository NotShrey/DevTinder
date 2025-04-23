import java.util.*;

class Solution {
    private void solve(List<String> ans, StringBuilder op, String digits, String[] mpp, int ind) {
        if (ind == digits.length()) {
            ans.add(op.toString());  // Add the combination to the answer list
            return;
        }
        
        int no = digits.charAt(ind) - '0';  // Convert char to integer
        String val = mpp[no];  // Get the string mapping for the current digit
        
        for (char ch : val.toCharArray()) {
            op.append(ch);  // Add the current character to the current combination
            solve(ans, op, digits, mpp, ind + 1);  // Recurse with the next index
            op.deleteCharAt(op.length() - 1);  // Backtrack, remove last character added
        }
    }

    public List<String> letterCombinations(String digits) {
        List<String> ans = new ArrayList<>();
        if (digits.length() == 0) return ans;  // If the input is empty, return an empty list
        
        // Mapping for digits '2' to '9'
        
        solve(ans, new StringBuilder(), digits, mpp, 0);
        return ans;
    }
}
