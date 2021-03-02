import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name="Product")
public class Product {
    @Id
    private int pid;
    private String pname;

    @OneToMany(mappedBy = "pObj")
    List<Categories> categories = new ArrayList();

    @ManyToMany(mappedBy = "prods")
    List<Supplier> suppliers = new ArrayList();

    public List<Categories> getCategories() {
        return categories;
    }

    public void setCategories(List<Categories> cats) {
        this.categories = cats;
    }

    public List<Supplier> getSuppliers() {
        return suppliers;
    }

    public void setSuppliers(List<Supplier> sups) {
        this.suppliers = sups;
    }

    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }


    @Override
    public String toString() {
        return "Product [pid=" + pid + ", pname=" + pname + ", cats=" + categories + ", sups=" + suppliers + "]";
    }

}
