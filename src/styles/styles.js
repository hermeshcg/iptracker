import styled from 'styled-components';

export const Container = styled.div`
  img {
    position: absolute;
    z-index: 2;
  }

  .header {
    .content {
      margin: 0 auto;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      position: relative;
      z-index: 3;

      h1 {
        padding: 2rem 0 1.7rem 0;
        font-size: 27px;
        font-weight: 500;
        color: white;
      }

      .input-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 400px;
        height: 50px;

        input {
          height: 55px;
          width: 100%;
          padding: 0 1.4rem;
          outline: none;
          font-size: 18px;
          border: none;
          border-top-left-radius: 18px;
          border-bottom-left-radius: 18px;
        }

        input::placeholder {
          color: hsl(0, 0%, 59%);
        }

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          background: hsl(0, 0%, 17%);
          border: none;
          border-top-right-radius: 18px;
          border-bottom-right-radius: 18px;
          width: 15%;
          height: 110%;
        }

        button:hover {
          background: hsl(0, 0%, 59%);
        }
      }
    }
  }

  .ip-content {
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    top: 40px;
    z-index: 3;

    background: #fff;
    margin-left: 180px;
    height: 100px;
    width: 1000px;
    border-radius: 16px;

    .ip-address {
      height: 70%;
      width: 25%;
      padding-left: 40px;
      border-right: 1px solid #ccc;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-evenly;
      h5 {
        padding-bottom: 17px;
      }
    }

    .ip-location {
      height: 70%;
      width: 25%;
      padding-left: 40px;
      border-right: 1px solid #ccc;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-evenly;
      h5 {
        padding-bottom: 0;
      }
    }

    .ip-timezone {
      height: 70%;
      width: 25%;
      padding-left: 40px;
      border-right: 1px solid #ccc;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-evenly;
      h5 {
        padding-bottom: 17px;
      }
    }
    .ip-isp {
      height: 70%;
      width: 25%;
      padding-left: 40px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-evenly;
      h5 {
        padding-bottom: 17px;
      }
    }
  }
`;
