package Prime;



import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class PrimeTest {

    @Test
    void test() {
        checkPrime test=new checkPrime();
        boolean output=test.check(7);
        assertEquals(true, output);
    }
}