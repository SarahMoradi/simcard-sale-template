import React from "react";
import DesktopMenu from "./desktopMenu";
import { Button, Card, CardBody, UncontrolledCollapse, FormGroup , Input} from "reactstrap"

const questions = () => {
  return (
    <>
      <DesktopMenu />
      <div style={{backgroundColor: 'GrayText'}} className="d-flex flex-column">
      <div style={{width: '500px', margin: '50px auto'}}>
            <h1 className="d-flex justify-content-center">
              نیاز به راهنمایی دارید؟
            </h1>
            <FormGroup>
                    <Input
                     className="mt-5"
                      name="search"
                      placeholder="عبارت مورد نظر خود را جستجو کنید"
                      type="text"
                    />
          </FormGroup>
            </div>
        </div>
      <div className="d-flex flex-column justify-content-center align-items-center my-5">

         <h2>
         سوالات
         </h2>
      </div>
          <div style={{width: '50%' , margin: '10px auto'}}>
                <div className="d-flex flex-column justify-content-center">
                  <Button
                    color="primary"
                    id="toggler"
                    style={{
                      marginBottom: '1rem',
                    }}
                  >
                    آیا استفاده کننده سیم کارت هم می تواند اقدام به تبدیل سیم کارت اعتباری به دائمی نماید؟
                  </Button>
                  <UncontrolledCollapse toggler="#toggler" className="my-4">
                    <Card>
                      <CardBody>
                            <p>تبدیل شماره تلفن همراه از اعتباری به دائمی، فقط برای مالک سیم کارت امکان پذیر می باشد.</p>
                            <p>برای خطوطی که از طریق "قرارداد استفاده کننده سیم کارت اعتباری" اقدام به تغییر نام نموده اند، امکان تبدیل شماره تلفن همراه به دائمی وجود ندارد.</p>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <Button
                    color="primary"
                    id="toggler1"
                    style={{
                      marginBottom: '1rem',
                    }}
                  >
                    آیا در همه فناوری‏ های ارتباطی نیاز به استفاده از گیت‏ وی ارتباطی هست؟
                  </Button>
                  <UncontrolledCollapse toggler="#toggler1"  className="my-4">
                    <Card>
                      <CardBody>
                            <p>در صورت استفاده از فناوری‏های ارتباطی سلولار مانند 2G/3G/4G و NBIoT نیاز به گیت‏‌وی نیست و ماژول‏ها به صورت مستقل اطلاعات را ارسال می‏کنند اما در صورت استفاده از سایر فناوری‏های ارتباطی مانند LoRa نیاز به گیت‏وی‏های ارتباطی وجود دارد.</p>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <Button
                    color="primary"
                    id="toggler2"
                    style={{
                      marginBottom: '1rem',
                    }}
                  >
                   از چه طریقی می توان عضو باشگاه مشتریان (باشگاه فیروزه ای) همراه اول شد؟
                  </Button>
                  <UncontrolledCollapse toggler="#toggler2"  className="my-4">
                    <Card>
                      <CardBody>
                            <p>در صورتی که از طریق کد دستوری 
                              <span>
                              *724#
                              </span>
                              اقدام به پرداخت صورتحساب تلفن همراه کرده اید و پول از حساب بانکی کسر شده اما مبلغ پرداختی از صورتحساب کسر نشده است، از زمان پرداخت صورتحساب 24 ساعت زمان دهید وصولی پرداختی شما در سیستم ثبت و مبلغ پرداختی از صورتحساب کسر شود؛ چنانچه پس از 24 ساعت وصولی پرداختی شما ثبت نشد می توانید جهت پیگیری با شماره پشتیبانی (24 ساعته) 84080-021 و یا 6422-021 تماس حاصل نمایید.
                            </p>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <Button
                    color="primary"
                    id="toggler3"
                    style={{
                      marginBottom: '1rem',
                    }}
                  >
                    در باشگاه فیروزه ای آیا برای دریافت امتیاز مربوط به پرداخت قبض و خرید شارژ محدودیت زمانی وجود دارد؟
                  </Button>
                  <UncontrolledCollapse toggler="#toggler3"  className="my-4">
                    <Card>
                      <CardBody>
                            <p>بله، امتیاز باشگاه فیروزه ای تنها تا 30 روز پس از پرداخت قبض یا خرید شارژ قابل دریافت است و پس از آن منقضی می گردد.</p>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
          </div>
    </>
  );
};

export default questions;
