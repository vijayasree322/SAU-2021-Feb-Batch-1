import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="Supplier")
public class Supplier {
    @Id
    private int sid;

    @ManyToMany
    List<Categories> categories = new ArrayList();

    @ManyToMany
    List<Product> products = new ArrayList();

    public void setCategories(List<Categories> cats) {
        this.categories = cats;
    }
    public List<Categories> getCategories() {
       return  categories;
    }
    public List<Product> getProds() {
        return products;
    }
    public void setProds(List<Product> prods) {
        this.products = prods;
    }
    private String sname;
    public int getSid() {
        return sid;
    }
    public void setSid(int sid) {
        this.sid = sid;
    }
    public String getSname() {
        return sname;
    }
    public void setSname(String sname) {
        this.sname = sname;
    }
    @Override
    public String toString() {
        return "Supplier [sid=" + sid + ", cats=" + categories + ", prods=" + products + ", sname=" + sname + "]";
    }


}