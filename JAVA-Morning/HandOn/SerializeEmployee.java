import java.io.*;

class Employee implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = -4326499640704322084L;
    transient int a;
    transient String b;
    int c;
    String name;
    int age;

    public Employee(String name, int age, int a, String b,int c) {
        this.name = name;
        this.age = age;
        this.a = a;
        this.b = b;
        this.c = c;
    }

}

public class SerializeEmployee {
    public static void printdata(Employee object1) {

        System.out.println("name = " + object1.name);
        System.out.println("age = " + object1.age);
        System.out.println("a = " + object1.a);
        System.out.println("b = " + object1.b);
        System.out.println("c = " + object1.c);
    }

    public static void main(String[] args) {
        Employee object = new Employee("VijayaSree", 20, 2, "1000",12);
        String filename = "ananth.txt";

        try {

            FileOutputStream file = new FileOutputStream(filename);
            ObjectOutputStream out = new ObjectOutputStream(file);

            out.writeObject(object);

            out.close();
            file.close();

            System.out.println("Object has been serialized\n" + "Data before Deserialization.");
            printdata(object);

        }

        catch (IOException ex) {
            System.out.println("IOException is caught");
        }

        object = null;

        try {

            FileInputStream file = new FileInputStream(filename);
            ObjectInputStream in = new ObjectInputStream(file);

            object = (Employee) in.readObject();

            in.close();
            file.close();
            System.out.println("Object has been deserialized\n" + "Data after Deserialization.");
            printdata(object);

        }

        catch (IOException ex) {
            System.out.println("IOException is caught");
        }

        catch (ClassNotFoundException ex) {
            System.out.println("ClassNotFoundException" + " is caught");
        }
    }
}