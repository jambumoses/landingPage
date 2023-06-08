import { React, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useSelector, useDispatch } from "react-redux";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { constantActions } from "../store/constantSlice";

/* ManagementTeam card */
function ManagementTeam({ image, name, role }) {
  return (
    <div data-aos="fade-up" className="members_section_member">
      <div
        className="members_section_member_thumbnail"
        style={{
          backgroundImage: `url(${require("./img/member_remove.png")})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="members_section_member_info">
        <span>{name}</span>
        <span className="members_section_member_info_titles">{role}</span>
      </div>
    </div>
  );
}

/* BoardMember */
function BoardMember({ image, name, role }) {
  return (
    <section data-aos="fade-up">
      <span className="members_section_member_container_main_image_section">
        <img src={require("./img/member_remove.png")} alt="" />
      </span>
      <span className="members_section_member_container_main_information_section">
        <span className="name">{name}</span>
        <p className="role">{role}</p>
      </span>
    </section>
  );
}

export default function About() {
  const merchantData = useSelector((state) => state.merchant);
  const constantInfo = useSelector((state) => state.constant.data);
  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.merchant.CompanyTitle);

  // page titles
  dispatch(constantActions.updatePageTitles(companyName + " . " + "About Us"));
  dispatch(constantActions.setCurrentPage("about"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const aboutBannerImage = useSelector(
    (state) => state.banner.aboutBanner.image.url
  );

  return (
    <>
      <section className="about-wrapper">
        <img src={require("./img/pic3.jpg")} alt="" />
      </section>

      <section className="about-container">
        <section className="about-container_1">
          <div className="about-container_1_mission">
            <h2 data-aos="fade-right">Mission</h2>
            <span data-aos="fade-up">{merchantData.aboutus.mission}</span>
          </div>

          <div className="about-container_1_vision">
            <h2 data-aos="fade-right">Vision</h2>
            <span data-aos="fade-up">{merchantData.aboutus.vision}</span>
          </div>

          <div className="about-container_1_img">
            <img src={require("./img/people1.png")} alt="" />
          </div>
        </section>

        <section className="about-container_2">
          {merchantData.aboutus.notes.map(function (item) {
            return (
              <p key={item._id} data-aos="fade-up">
                {item.note}
              </p>
            );
          })}
        </section>
      </section>

      <section className="members_section">
        <h1 data-aos="fade-up" className="members_section_main_title">
          {merchantData.aboutus.membership.board.title}
        </h1>
        <div className="members_section_member_container_main">
          {merchantData.aboutus.membership.board.members.map(function (item) {
            return (
              <BoardMember
                key={item._id}
                image={item.image}
                name={item.name}
                role={item.role}
              />
            );
          })}
        </div>
      </section>

      <section className="members_section members_section22">
        <h1 data-aos="fade-up" className="members_section_main_title">
          {merchantData.aboutus.membership.managementTeam.title}
        </h1>
        <div data-aos="fade-up" className="members_section_member_container">
          <Slider {...settings}>
            {merchantData.aboutus.membership.managementTeam.members.map(
              function (item) {
                return (
                  <ManagementTeam
                    key={item._id}
                    image={item.image}
                    name={item.name}
                    role={item.role}
                  />
                );
              }
            )}
          </Slider>
        </div>
      </section>
    </>
  );
}
