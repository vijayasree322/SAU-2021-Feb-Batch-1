import java.util.Scanner;
import java.util.Stack;

public class EvaluateString {

        public static int evaluate(String input)
        {
            char[] tokens = input.toCharArray();

            Stack<Integer> digits = new Stack<Integer>();
            Stack<Character> operator = new Stack<Character>();

            for (int i = 0; i < tokens.length; i++)
            {
                if (tokens[i] == ' ')
                    continue;
                if (tokens[i] >= '0' &&
                        tokens[i] <= '9')
                {
                    StringBuffer sbuf = new StringBuffer();

                    while (i < tokens.length &&
                            tokens[i] >= '0' &&
                            tokens[i] <= '9')
                        sbuf.append(tokens[i++]);
                    digits.push(Integer.parseInt(sbuf.toString()));
                    i--;
                }

                else if (tokens[i] == '(')
                    operator.push(tokens[i]);

                    // Closing brace encountered,
                    // solve entire brace
                else if (tokens[i] == ')')
                {
                    while (operator.peek() != '(')
                        digits.push(applyOp(operator.pop(), digits.pop(), digits.pop()));
                    operator.pop();
                }

                else if (tokens[i] == '+' || tokens[i] == '-' ||
                        tokens[i] == '*' || tokens[i] == '/' || tokens[i]=='%')
                {
                    if(!operator.empty()) {
                        while (!operator.empty() && hasPrecedence(tokens[i], operator.peek()))
                            digits.push(applyOp(operator.pop(), digits.pop(), digits.pop()));
                    }
                    operator.push(tokens[i]);
                }
            }


            while (!operator.empty())
                digits.push(applyOp(operator.pop(),digits.pop(),digits.pop()));
            return digits.pop();
        }


        public static boolean hasPrecedence(
                char op1, char op2)
        {
            if (op2 == '(' || op2 == ')')
                return false;
            if ((op1 == '*' || op1 == '/') &&
                    (op2 == '+' || op2 == '-'))
                return false;
            else
                return true;
        }


        public static int applyOp(char op, int b, int a)
        {
            switch (op)
            {
                case '+':
                    return a + b;
                case '-':
                    return a - b;
                case '*':
                    return a * b;
                case '/':
                    if (b == 0)
                        throw new
                                UnsupportedOperationException(
                                "Cannot divide by zero");
                    return a / b;
                case '%':return a%b;
            }
            return 0;
        }

        public static void main(String[] args)
        {
            int i=0;
            Scanner sc= new Scanner(System.in);
            while(i<5) {
                System.out.println("Enter String to be evaluated");
                String input = sc.nextLine();
                System.out.println(EvaluateString.evaluate(input));
            }
        }
    }


