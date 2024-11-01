import os
import json
import requests
from flask import Flask, request, jsonify
from web3 import Web3
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# Load ML model
# model = joblib.load('model.pkl')  

# Connect to blockchain
infura_project_id = os.getenv("INFURA_PROJECT_ID")
private_key = os.getenv("PRIVATE_KEY")
etherscan_api_key = os.getenv("ETHERSCAN_API_KEY")
contract_address = os.getenv("CONTRACT_ADDRESS")

web3 = Web3(Web3.HTTPProvider(f"https://sepolia.infura.io/v3/{infura_project_id}"))

etherscan_url = f"https://api.etherscan.io/api?module=contract&action=getabi&address={contract_address}&apikey={etherscan_api_key}"
with open('challanABI.json', 'r') as file:
    contract_abi = json.load(file)

contract = web3.eth.contract(address=contract_address, abi=contract_abi['abi'])

# Prediction endpoint
# @app.route('/predict', methods=['POST'])
# def predict():
#     data = request.json
#     prediction = model.predict([data['features']])
#     return jsonify({"prediction": prediction[0]})

# Blockchain transaction endpoint
@app.route('/transact', methods=['GET'])
def transact():
    # data = request.json
    # prediction = model.predict([data['features']])

    # Prepare transaction
    print('hi0')
    account = web3.eth.account.from_key(private_key)
    print('hi1')
    print(account)
    tx_data={
        'vehicleId': '1234',
        'amount':'10',
        'reason':'Over Speeding',
        'location':'Delhi',
    }
    print('hi2')
    nonce = web3.eth.get_transaction_count(
            account.address)
    transaction = contract.functions.issueChallan(    tx_data['vehicleId'],
    tx_data['amount'],
    tx_data['reason'],
    tx_data['location']).build_transaction({
        'nonce': nonce
    })

    print('hi3')
    # Sign and send transaction
    signed_txn = web3.eth.account.sign_transaction(transaction,private_key)
    # signed_txn = web3.eth.account.signTransaction(transaction, private_key=private_key)
    tx_hash = web3.eth.send_raw_transaction(signed_txn.raw_transaction)
    print(tx_hash.hex())
    tx_receipt = web3.eth.wait_for_transaction_receipt(tx_hash)

    return jsonify({"status": "Transaction complete", "tx_hash": tx_hash.hex()})

if __name__ == '__main__':
    app.run(debug=True)