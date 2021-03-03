import static junit.framework.Assert.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito.*;

import junit.framework.Assert;

public class CheckServiceTest {

    CheckService chkObj;

    @Before
    public void setup() {
        IsPrime iObj= mock(IsPrime.class);
        when(iObj.check(25)).thenReturn(false);
        chkObj=new CheckService();
        chkObj.setObj(iObj);

    }
    @Test
    public void testCheckPrime() {
        assertEquals(true, chkObj.checkPrime(25));
    }

}