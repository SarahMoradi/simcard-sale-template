import {
    Row,
    Col,
    Card,
    CardBody,
    CardImg,
    Button,
    CardTitle,
    CardSubtitle,
    CardText
  } from "reactstrap";
import packagew from '../pictures/package.jpg';
import credit from '../pictures/credit.jpg'
import payment from '../pictures/payment.jpg'
import password from '../pictures/password1.jpg'

const services = () => {
    return(
        <>
        <Row className='d-flex flex-column pt-2 px-5' style={{backgroundColor: '#ededed'}}>
        <Col sm='12'>
            <div>
                <h4 className='text-center mt-3' style={{fontWeight: 'bold'}}>
                نیترون اولین خدمات دهنده دیتا و سرویس های برون و درون کشوری
                </h4>
            </div>
            <div>
                <p className='text-center pb-4'>
                    اولین ارائه دهنده سیم کارت های کاربردی در مسافرت های خارج از کشور 
                </p>
            </div>
        </Col>
       <Col>
              <Row className='d-flex justify-content-around'>
                      <Col md='3' className='px-4 d-flex justify-content-center mb-4'>
                      <Card>
                          <CardImg
                            alt="Card image cap"
                            src={packagew}
                            top
                            width="100%"
                          />
                          <CardBody>
                            <CardTitle tag="h5" style={{fontWeight: 'bold'}}>
                              خرید بسته های مقرون به صرفه
                            </CardTitle>
                            <CardSubtitle
                              className="mb-2 text-muted"
                              tag="h6"
                            >
                              مخصوص اعضاویژه
                            </CardSubtitle>
                            <CardText>
                              در صورت تمایل به خرید بسته مصرفی از این قسمت میتوانید انواع طرح ها و بسته های مصرفی را مشاهده کنید. محاسبه هزینه بسته ها به دو روش پرداخت از طریق کارت های عضو شتاب و کسر از اعتبار ریالی امکان پذیر است.
                            </CardText>
                            <Button color="primary">
                             خرید بسته 
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md='3' className='px-4 d-flex justify-content-center mb-4'>
                      <Card>
                          <CardImg
                            alt="Card image cap"
                            src={credit}
                            top
                            width="100%"
                          />
                          <CardBody>
                            <CardTitle tag="h5" style={{fontWeight: 'bold'}}>
                                افزایش اعتبار
                            </CardTitle>
                            <CardSubtitle
                              className="mb-2 text-muted"
                              tag="h6"
                            >
                              مشترکین دائمی
                            </CardSubtitle>
                            <CardText>
                              گزینه افزایش اعتبار مخصوص مشترکین سیم کارت های دائمی و دیتا است و با انتخاب شماره نیترون و مبلغ شارژ دلخواه بدون نیاز به وارد کردن کد شارژ اعتبار ریالی در همان لحظه اعمال میگردد.
                            </CardText>
                            <Button color="primary">
                              افزایش اعتبار
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md='3' className='px-4 d-flex justify-content-center mb-4'>
                      <Card>
                          <CardImg
                            alt="Card image cap"
                            src={payment}
                            top
                            width="100%"
                          />
                          <CardBody>
                            <CardTitle tag="h5" style={{fontWeight: 'bold'}}>
                              پرداخت صورت حساب پایان دوره
                            </CardTitle>
                            <CardSubtitle
                              className="mb-2 text-muted"
                              tag="h6"
                            >
                              همه مشترکین
                            </CardSubtitle>
                            <CardText>
                              این قسمت مخصوص مشترکین سیم کارت های دايمی است. با انتخاب شماره تلفن و انتخاب "دوره صورتحساب" مبلغ کارکرد شما نمایش داده میشود. همچنین با انتخاب گزینه "مشاهده جزيیات"
                              ریز کارکرد به شما نمایش داده میشود.
                            </CardText>
                            <Button color="primary">
                              پرداخت صورتحساب
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md='3' className='px-4 d-flex justify-content-center mb-4'>
                      <Card>
                          <CardImg
                            alt="Card image cap"
                            src={password}
                            top
                            width="100%"
                          />
                          <CardBody>
                            <CardTitle tag="h5" style={{fontWeight: 'bold'}}>
                              تغییر رمز عبور
                            </CardTitle>
                            <CardSubtitle
                              className="mb-2 text-muted"
                              tag="h6"
                            >
                              همه مشترکین
                            </CardSubtitle>
                            <CardText>
                            جهت حفظ امنیت سامانه رایتل من خود، توصیه می شود حتما پس از نخستین ورود، نسبت به تغییر رمز عبور، اقدام نمایید. به این منظور، راهنمای تصویری جهت آموزش تصویری جهت تعیین رمز دلخواه شما موجود می باشد.
                            </CardText>
                            <Button color="primary">
                              تغییر رمز عبور
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
              </Row>
       </Col>
     </Row>
        </>
    )
}

export default services;