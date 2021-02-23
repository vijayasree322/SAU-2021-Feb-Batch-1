import java.util.TreeMap;

public class ReverseStudents {

    public static void main(String args[]) {
        TreeMap<String, String> map = new TreeMap<String, String>();

        map.put("Stud2", "Raghu");
        map.put("Stud1", "Ravi");
        map.put("Stud4", "Ramesh");
        map.put("Stud3", "Suresh");

        System.out.println("Orginal Map content: " + map);
        System.out.println("Reverse order view of the keys: " + map.descendingKeySet());
    }
}