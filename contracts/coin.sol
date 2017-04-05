pragma solidity ^0.4.0;

contract Coin {

    // Use the `public` keyword to declare a state variable that is publicly accessible
    // `public` generates a function to access the value of the state variable
    // Coin.minter => `function minter() returns (address) { return minter; }`
    address public minter;

    // Use the `mapping` keyword to create a virtual hashtable
    // `public` generates a function to access this hashtable
    /*
      Coin.balances =>
      ```
      function balances(address _account) returns (uint) {
        return balances[_account];
      }
      ```
    */
    mapping (address => uint) public balances;

    // Use the `event` keyword to declare an event
    // Clients can listen for events being fired on the blockchain
    // Listeners can access arguments via `(err, res) => res.args`
    // `Coin.Sent().watch(...)`
    event Sent(address from, address to, uint amount);

    // Constructor function only run during creation of the contract and cannot be called afterwards
    function Coin() {

      // `msg` is a magic global variable that contains some properties which allow access to the blockchain
      // msg.sender is always the address where the current (external) function call came from
      // permanently stores the address of the person creating the contract
      minter = msg.sender;

    }

    // Coin.mint()
    function mint(address receiver, uint amount) {

      if (msg.sender != minter) return;

      balances[receiver] += amount;

    }

    // Coin.send()
    function send(address receiver, uint amount) {

      if (balances[msg.sender] < amount) return;

      balances[msg.sender] -= amount;
      balances[receiver] += amount;

      Sent(msg.sender, receiver, amount);

    }

}
