import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function AboutInfo() {
  return (
    <div>
      <div className="bg-gradient-to-br from-red-100 to-blue-200">
        <div className="p-10 container m-auto">
          <div className="flex items-center gap-2">
            <h1 className="bg-red-400 w-[70px] md:w-[100px] h-[5px]"></h1>
            <h2 className="text-lg md:text-3xl font-extrabold">
              About Infohunt
            </h2>
          </div>
          <p className="max-w-lg my-8 font-serif text-lg">
            Are you looking for exciting places to visit and fun activities to
            engage in? Look no further!
          </p>
        </div>
      </div>
      <div className="container m-auto">
        <div className="justify-center px-3 md:justify-start flex items-center gap-4 py-4">
          <h1 className="text-lg">Jaga seda lehte</h1>
          <div className="flex items-center gap-2 text-xl">
            <p className="iconHover">
              <FaFacebook />
            </p>
            <p className="iconHover">
              <FaTwitter />
            </p>
            <p className="iconHover">
              <MdEmail />
            </p>
          </div>
        </div>
        <div className="p-5 md:max-w-7/12 m-auto text-lg ">
          <p>
            Infohunt is your all-in-one destination for essential information
            about events, projects, hobbies, education, and news tailored
            specifically for young people in your area.
          </p>
          <h4 className="hederLine">
            Discover a National Youth Information Portal
          </h4>

          <p>
            Infohunt serves as a comprehensive national youth information portal
            designed to compile and provide location-specific information about
            events, projects, hobbies, and educational opportunities. Managed by
            experts from the Estonian Education and Youth Board, in
            collaboration with local authorities, Infohunt provides the key to
            staying informed and engaged.
          </p>
          <h4 className="hederLine">
            Join Infohunt, Earn Points, and Win Amazing Prizes!
          </h4>
          <p>
            As an Infohunt user, you have an incredible opportunity to register
            for events that interest you and participate in thrilling prize
            hunts. By signing up, getting involved, and providing feedback,
            you’ll earn points that can lead to fantastic rewards. Choose from
            avatars to unique local prizes. Make sure to follow the instructions
            provided with each prize to claim physical rewards, which might
            involve collecting items from a local youth center or providing your
            mailing address.
          </p>
          <h4 className="hederLine">
            Personalize Your Experience with Avatars
          </h4>
          <p>
            Infohunt introduces an exciting feature: avatars. Use the points
            you’ve earned to personalize your Infohunt account with a standout
            avatar. Seize the chance to make your involvement even more special!
          </p>
          <h4 className="hederLine">The Origin of Infohunt</h4>
          <p>
            In 2017, the Estonian Youth Work Centre (now the Estonian Education
            and Youth Board) proposed collaboration to prevent youth exclusion
            and enhance the variety, accessibility, and quality of youth
            opportunities through innovation. Collaborative groups identified
            gaps in youth information and devised a solution. The result was
            Infohunt, a digital solution jointly created by collaborative
            groups. This innovative platform, supported by the ESF program, was
            launched in 2020.
          </p>
          <p className="mt-4">
            Information provided by Infohunt is managed by local municipalities
            together with youth sector service providers in the areas.
          </p>
          <h4 className="hederLine">Developed with Care</h4>
          <p>
            Infohunt’s development is supported by the Estonian Education and
            Youth Board and the European Social Fund. Activities are funded
            under the program “Involvement of Youth at Risk of Exclusion and
            Enhancement of Youth Employment Readiness,” approved by the Minister
            of Education and Research.
          </p>
          <p className="mt-4">
            Begin your Infohunt journey today and unlock a world of
            opportunities tailored to young people like you!
          </p>
        </div>
         <div className="justify-center px-3 md:justify-start flex items-center gap-4 py-4">
          <h1 className="text-lg">Jaga seda lehte</h1>
          <div className="flex items-center gap-2 text-xl">
            <p className="iconHover">
              <FaFacebook />
            </p>
            <p className="iconHover">
              <FaTwitter />
            </p>
            <p className="iconHover">
              <MdEmail />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutInfo;
