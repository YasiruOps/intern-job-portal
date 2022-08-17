import React from "react";
import "../CSS/forum_compage.css";
import Header from "./header";
import { useNavigate } from "react-router-dom";

import { GoSearch } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CgComment } from "react-icons/cg";
import { FiShare2 } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";
import { FiThumbsDown } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";

import Profpic from "../images/forum_img.png";

export default function forum_compage() {
  return (
    <div className="">
      <Header />
      <div className="jobsearch col-9">
        <p className="searchjobtag2">Forum</p>

        <div className="col-12">
          <div className="searchboxjob2">
            <GoSearch className="searchiconjob" />
            <input type="text" className="searchinjob" placeholder="Search" />
            <button type="button" class="btn btn-light advancedsearhjob">
              Advanced
            </button>
          </div>
        </div>

        <hr className="jobdetailshr" />

        <div className="sorterbar row">
          <div className="sorterbarcontent col-2">
            <AiOutlineStar className="soterbarnewcat-icon" />
            <p className="soterbarnewcat float-right">New</p>
          </div>

          <div className="sorterbarcontent  col-2">
            <BiTrendingUp className="soterbarnewcat-icon" />
            <p className="soterbarnewcat float-right">Top</p>
          </div>

          <div className="sorterbarcontent col-2">
            <AiOutlineClockCircle className="soterbarnewcat-icon" />
            <p className="soterbarnewcat float-right">Old</p>
          </div>

          <div className="sorterbarcontentend endsetterselect col-6">
            <div className="activity-selector-forumpage">
              <select className="minimal-forumpage ">
                <option>Type</option>
                <option>Best match</option>
                <option>Newest first</option>
                <option>Oldest first</option>
              </select>
            </div>
          </div>
        </div>

        {/*  main center part of page*/}
        <div className="forum-main row">
          <div className="forum-left col-12">
            {/* question card teal*/}
            <div className="qraised row">
              <div
                className="qupvote col-xl-1"
                style={{ backgroundColor: "white" }}
              >
                <div className="qupvotebar">
                  <BsArrowUpCircle className="countericons hovupvote" />
                  <p className="upcountq">12</p>
                  <BsArrowDownCircle className="countericons hovdownvote" />
                </div>
              </div>

              <div className="picarea col-xl-2">
                <img src={Profpic} className="profilepic" />
              </div>
              <div className="qmid col-xl-9">
                <div className="row">
                  <p className="qmidtitle">Tips for Jumbo.tec interviews </p>
                  <p className="qmidq">All help would be appreciated</p>
                  <p className="qmiddate">
                    12:09pm <span>8/05/2022</span>
                  </p>
                </div>

                <div className="row qintractsect">
                  <div className="col-5 qintractsect-c1">
                    <CgComment className="qintractsect-c1-icons" />
                    <p className="qintractsect-c1-tag">
                      <span>2 </span>comments
                    </p>
                  </div>
                  <div className="col-3  qintractsect-c1">
                    <BsBookmark className="qintractsect-c1-icons" />
                    <p className="qintractsect-c1-tag">Save</p>
                  </div>
                  <div className="col-4 qintractsect-c1">
                    <FiShare2 className="qintractsect-c1-icons" />
                    <p className="qintractsect-c1-tag">Share</p>
                  </div>
                </div>
              </div>

              <div className="commentinputarea col-10">
                <textarea
                  className="form-control commmentinput"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Type your comment here"
                />

                <button type="button" class="btn btn-primary addcomtbtn">
                  Add comment
                </button>
              </div>

              <div className="commentsarea col-10">
                <p className="commentstag">Comments</p>
                <hr className="commentstaghr" />
                <div className="commentbox row">
                  <div className="commmentbox-left d-none d-xxl-block col-1">
                    <img
                      src={Profpic}
                      alt="image here"
                      className="commenterprofpic"
                    />
                  </div>
                  <div className="commentboxmid col-10">
                    <p className="commentatornametag">Jhone Doe</p>
                    <p className="comment">
                      Just be yourself dont think about it much youll pass
                    </p>
                  </div>
                  <div className="commnetboxrgt col-1">
                    <FiThumbsUp className="thumbsupicon" />
                    <p className="counter">12</p>
                    <FiThumbsDown className="thumbsdownicon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
