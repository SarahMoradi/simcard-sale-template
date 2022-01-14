import React from "react";
import { Toast, ToastHeader, ToastBody } from "reactstrap";
import DesktopMenu from "./desktopMenu";
import { SiNintendonetwork } from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";

const aboutUs = () => {
  return (
    <>
      <DesktopMenu />
      <div className="d-flex justify-content-between">
        <div
          className="d-flex align-items-center justify-content-center p-5"
          style={{
            margin: "100px",
            height: "195px",
            backgroundColor: "blue",
            color: "#fff",
            borderRadius: "50%",
          }}
        >
          <SiNintendonetwork size={25} style={{ color: "#fff" }} />
          <div
            style={{
              marginRight: "10px",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            نیترون
          </div>
        </div>
        <div className="mt-5">
          <div className="d-flex py-4">
            <AiOutlineGlobal size={40} />
            <div>
              <h2 className="mx-3">کارآمد در ۲۰۰ کشور جهان</h2>
              <p className="mx-3">
                شما میتوانید این سیم کارت را هم اکنون فعالسازی نمایید
              </p>
            </div>
          </div>
          <div className="d-flex py-4">
            <AiOutlineGlobal size={40} />
            <div>
              <h2 className="mx-3">
                صرفه جویی در استفاده از رومینگ بین المللی
              </h2>
              <p className="mx-3">
                هر زمان که شما در سفر هستید تنها لازم است تا سیم کارت خود را
                فعال کنید و با خیال راحت به مقصد خود نقل مکان کنید
              </p>
            </div>
          </div>
          <div className="d-flex py-4">
            <AiOutlineGlobal size={40} />
            <div>
              <h2 className="mx-3">۷۰٪ ارزان تر از رومینگ سیمکارت فعلی شما</h2>
              <p className="mx-3">
                هزینه های رومینگ خو را تا حد امکان کاهش دهید
              </p>
            </div>
          </div>
          <div className="d-flex py-4">
            <AiOutlineGlobal size={40} />
            <div>
              <h2 className="mx-3">عدم نیاز به جا به جایی سیم کارت فعلی</h2>
              <p className="mx-3">
                به راحتی میتوانید ارائه دهنده خود را تغییر دهید
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <div className="p-3 my-2 rounded">
            <Toast>
              <ToastHeader className="d-flex justify-content-center">
                <p> چگونه میتوانیم به شما کمک کنیم؟</p>
              </ToastHeader>
              <ToastBody className="text-center">
                در صورت نیاز به راهنمایی با شماره زیر جهت پشتیبانی تماس حاصل
                فرمایید.
                <p className="mt-2">021-885741220</p>
              </ToastBody>
            </Toast>
          </div>
        </div>
      </div>
    </>
  );
};

export default aboutUs;
