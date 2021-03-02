import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name="Category")
public class Categories {
    @Id
    private int cid;
    private String cname;

    @ManyToOne
    Product pObj;

    @ManyToMany(mappedBy = "categories")
    List<Supplier> suppliers = new ArrayList();


        public Product getpObj() {
            return pObj;
        }
        public void setpObj(Product pObj) {
            this.pObj = pObj;
        }
        public List<Supplier> getSuppliers() {
            return suppliers;
        }
        public void setSuppliers(List<Supplier> sups) {
            this.suppliers = sups;
        }


        public int getCid() {
            return cid;
        }
        public void setCid(int cid) {
            this.cid = cid;
        }
        public String getCname() {
            return cname;
        }
        public void setCname(String cname) {
            this.cname = cname;
        }
        @Override
        public String toString() {
            return "Categories [cid=" + cid + ", cname=" + cname + ", pObj=" + pObj + ", sups=" + suppliers + "]";
        }



}