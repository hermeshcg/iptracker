import styled from 'styled-components';

export const Container = styled.div`
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
      strong {
        padding-right: 5px;
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
  @media (max-width: 800px) {
    .ip-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 80%;
      height: 90%;
      margin-left: 35px;
      .ip-address {
        padding: 10px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: none;
        border-bottom: 1px solid #ccc;
      }

      .ip-location {
        padding: 10px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: none;
        border-bottom: 1px solid #ccc;
        h5 {
          padding-bottom: 4px;
        }
        .ip-location-info {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          strong {
            padding-left: 10px;
          }
        }
      }
      .ip-timezone {
        padding: 10px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: none;
        border-bottom: 1px solid #ccc;
      }
      .ip-isp {
        padding: 10px 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
