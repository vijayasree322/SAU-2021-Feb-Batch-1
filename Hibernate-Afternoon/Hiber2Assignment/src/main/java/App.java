
import Util.util;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;


/**
 * Hello world!
 *
 */
public class App
{
    public static void main( String[] args )
    {
        Product ptemp=new Product();
        ptemp.setPid(1);
        ptemp.setPname("Car");
        Product ptemp2=new Product();
        ptemp2.setPid(2);
        ptemp2.setPname("Bike");
        Product ptemp3=new Product();
        ptemp3.setPid(3);
        ptemp3.setPname("SmartPhone");
        Product ptemp4=new Product();
        ptemp4.setPid(4);
        ptemp4.setPname("Table");


        Categories ctemp=new Categories();
        ctemp.setCid(1);
        ctemp.setCname("Rahul");
        Categories ctemp2=new Categories();
        ctemp2.setCid(2);
        ctemp2.setCname("Ravi");
        Categories ctemp3=new Categories();
        ctemp3.setCid(3);
        ctemp3.setCname("Raghu");
        Categories ctemp4=new Categories();
        ctemp4.setCid(4);
        ctemp4.setCname("Ramesh");

        Supplier stemp= new Supplier();
        stemp.setSid(1);
        stemp.setSname("Supplier 1");
        Supplier stemp2= new Supplier();
        stemp2.setSid(2);
        stemp2.setSname("Supplier 2");
        Supplier stemp3= new Supplier();
        stemp3.setSid(3);
        stemp3.setSname("Supplier 3");
        Supplier stemp4= new Supplier();
        stemp4.setSid(4);
        stemp4.setSname("Supplier 4");

        ptemp.getSuppliers().add(stemp);
        ptemp.getCategories().add(ctemp);
        ptemp2.getSuppliers().add(stemp2);
        ptemp2.getCategories().add(ctemp2);
        ptemp3.getSuppliers().add(stemp3);
        ptemp3.getCategories().add(ctemp4);
        ptemp4.getSuppliers().add(stemp4);
        ptemp4.getCategories().add(ctemp4);


        ctemp.getSuppliers().add(stemp);
        ctemp2.getSuppliers().add(stemp2);
        ctemp3.getSuppliers().add(stemp3);
        ctemp4.getSuppliers().add(stemp4);
        ctemp.setpObj(ptemp);
        ctemp2.setpObj(ptemp2);
        ctemp3.setpObj(ptemp3);
        ctemp4.setpObj(ptemp4);

        stemp.getCategories().add(ctemp);
        stemp.getProds().add(ptemp);
        stemp2.getCategories().add(ctemp2);
        stemp2.getProds().add(ptemp2);
        stemp3.getCategories().add(ctemp3);
        stemp3.getProds().add(ptemp3);
        stemp4.getCategories().add(ctemp4);
        stemp4.getProds().add(ptemp4);

//        Configuration config = new Configuration().configure().addAnnotatedClass(Product.class).addAnnotatedClass(Categories.class).addAnnotatedClass(Supplier.class);
//        ServiceRegistry registry= new StandardServiceRegistryBuilder().applySettings(config.getProperties()).build();
//        SessionFactory sf=config.buildSessionFactory(registry);
//        Session session=sf.openSession();
        Session session = util.getSession();
        Transaction tx = session.beginTransaction();

        session.beginTransaction();

        session.save(ptemp);
        session.save(stemp);
        session.save(ctemp);

        session.save(ptemp2);
        session.save(stemp2);
        session.save(ctemp2);

        session.save(ptemp3);
        session.save(stemp3);
        session.save(ctemp3);

        session.save(ptemp4);
        session.save(stemp4);
        session.save(ctemp4);

        session.getTransaction().commit();
    }
}