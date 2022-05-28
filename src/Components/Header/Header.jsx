import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="navbar">
          <div className="logo-container">
            <div className="burger-parent">
              <div className="burger">
                <img src="burger.svg" alt="" />
              </div>
              <div className="logo">
                <a style={{ display: "flex" }} href="">
                  <img src="logo.png" alt="" width="75" height="20" />
                </a>
                <p style={{ fontSize: "11px", fontStyle: "italic" }}>
                  <a
                    style={{
                      textDecoration: "none",
                      fontWeight: "400",
                      color: "white",
                    }}
                    href=""
                  >
                    Explore
                    <span style={{ color: "#ffe500", fontWeight: "500" }}>
                      Plus
                    </span>
                  </a>
                  <img width="10" src="plus.png" alt="" />
                </p>
              </div>
            </div>
            <div className="mobile-icons">
              <a href="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#fff" fillRule="evenodd">
                    <path d="m5.189 13.04c0 .996-.791 1.804-1.767 1.804-.976 0-1.767-.808-1.767-1.804 0-.996.791-1.804 1.767-1.804.976 0 1.767.808 1.767 1.804"></path>
                    <path d="m14.912 2.259h-14.298l2.247 6.917c.042.129.16.216.293.216h8.06c-.064.69-.629 1.841-1.702 1.841h-6.04l1.072 1.991h5.611c1.881 0 2.938-2.278 3.657-4.719.888-3.01 1.219-6.245 1.106-6.245"></path>
                    <path d="m.615 2.259l-.592-1.828c-.08-.207.069-.431.287-.431h1.482c.126 0 .24.079.287.198l.682 2.061c0 0-.63 1.642-1.942.066"></path>
                    <path d="m2.262.756c0 0 .498 1.503 2.234 1.503l-1.736.749-1.104-.749.607-1.503"></path>
                    <path d="m13.424 13.325c0 .837-.664 1.516-1.484 1.516-.82 0-1.484-.679-1.484-1.516 0-.837.664-1.516 1.484-1.516.82 0 1.484.679 1.484 1.516"></path>
                  </g>
                </svg>
              </a>
              <a href="">Login</a>
            </div>
          </div>
          <div className="searchbox">
            <input
              type="text"
              placeholder="Search for products, brands and more"
            />
            <button>
              <svg
                width="20"
                height="20"
                viewBox="0 0 17 18"
                className=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#2874F1" fillRule="evenodd">
                  <path
                    className="_34RNph"
                    d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
                  ></path>
                  <path
                    className="_34RNph"
                    d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
                  ></path>
                </g>
              </svg>
            </button>
          </div>

          <div className="header-buttons">
            <button>Login</button>

            <div className="More">
              <div className="headbtn">More</div>
              <div className="arrow">
                <svg
                  width="5"
                  height="8"
                  viewBox="0 0 16 27"
                  xmlns="http://www.w3.org/2000/svg"
                  className="_2sVfI7"
                >
                  <path
                    d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                    fill="#fff"
                    className="_1zrN4q"
                  ></path>
                </svg>
              </div>
              <div className="dropdown">
                <div className="dropdown-content">
                  <a href="#">Notification Prefences</a>
                  <a href="#">24x7 Customer Care</a>
                  <a href="#">Advertise</a>
                  <a href="#">Doenload App</a>
                </div>
              </div>
            </div>

            <div className="cart">
              <div className="cartlogo">
                <svg
                  className="V3C5bO"
                  width="16"
                  height="15.8"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="_1bS9ic"
                    d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                    fill="#fff"
                  ></path>
                </svg>
              </div>
              <div className="headbtn">Cart</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
