import com.kuaidudu.bean.User;
import com.kuaidudu.dao.UserMapper;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MyTest {
    @Test
    public void test1(){
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("spring/applicationContext-dao.xml");
        UserMapper bean = applicationContext.getBean(UserMapper.class);
        User user = new User();
        user.setUserTel("19822902230");
        bean.queryByPhone("1223456789");
        System.out.println(bean);

    }
}
