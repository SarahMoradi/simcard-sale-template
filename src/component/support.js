import React from "react";
import DesktopMenu from "./desktopMenu";
import { Form, FormGroup, Label, Input, Button  } from "reactstrap"

const support = () => {
  return (
    <>
      <DesktopMenu />
      <div className="d-flex flex-column justify-content-center align-items-center my-5">
          <h2>
                به کمک نیاز دارید؟ سوالات خود را بپرسید
          </h2>
          <p>
             در ساعات پاسخگویی به سوالات پرتکرار شما پاسخ خواهیم داد و بازه پاسخگویی آنلاین همه روزه از ساعت 10 الی 22 می باشد. لطفا تیکت خود را ثبت کنید : 
          </p>

          <div className="d-flex flex-column p-5 mt-5" style={{backgroundColor: '#0d6efd', borderRadius: '30px'}}>
          <h4 className="mt-5" style={{color: '#fff'}}>
            لطفا فیلدها را با اطلاعات صحیح پر کنید : 
          </h4>
            <div className="mt-5">
            <Form inline>
              <FormGroup>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="ایمیل خود را وارد کنید"
                  type="email"
                />
              </FormGroup>
              {' '}
              <FormGroup>
                
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="پسورد خود را وارد کنید"
                  type="password"
                />
                <FormGroup>
                <Input
                 className="mt-4"
                  id="exampleText"
                  name="text"
                  type="textarea"
                  placeholder="پیام شما"
                />
              </FormGroup>
              </FormGroup>
              {' '}
              <Button color="success" className="mb-5 mt-3" style={{width: '100%'}}>
                ثبت اطلاعات
              </Button>
            </Form>
            </div>
          </div>
      </div>
    </>
  );
};
export default support;
