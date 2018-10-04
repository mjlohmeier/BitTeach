import React from "react";

const BitCoinResources = () => {
  return (
    <div className="card-group text-center">
      <div className="card forms mr-3" style={{ width: "18rem" }}>
        <div className="card-title">Resources</div>
        <div className="card-body">
          <div className="card-text">
            <ul className="list-group">
              <li className="list-group-item">
                <a
                  className="text-dark"
                  href="https://en.bitcoin.it/wiki/Main_Page"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  BitCoin Wiki
                </a>
              </li>
              <li className="list-group-item">
                <a
                  className="text-dark"
                  href="https://www.khanacademy.org/economics-finance-domain/core-finance/money-and-banking/bitcoin/v/bitcoin-what-is-it"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Khan Academy
                </a>
              </li>
              <li className="list-group-item">
                <a
                  className="text-dark"
                  href="https://letstalkbitcoin.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Let's Talk Bitcoin
                </a>
              </li>
            </ul>{" "}
          </div>
        </div>
      </div>
      <div className="card forms" style={{ width: "18rem" }}>
        <div className="card-title">Resources</div>
        <div className="card-body">
          <div className="card-text">
            <ul className="list-group">
              <li className="list-group-item">
                <a
                  className="text-dark"
                  href="https://www.bitcoin.kn/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  BitCoin Knowledge Podcast
                </a>
              </li>
              <li className="list-group-item">
                <a
                  className="text-dark"
                  href="https://www.bitcoinmining.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  BitCoin Mining
                </a>
              </li>
              <li className="list-group-item">
                <a
                  className="text-dark"
                  href="https://bitcoinmagazine.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  BitCoin Magazine
                </a>
              </li>
            </ul>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitCoinResources;
