import Nat "mo:base/Nat";
import Nat64 "mo:base/Nat64";
import List "mo:base/List";
import Array "mo:base/Array";
import Option "mo:base/Option";
import Bool "mo:base/Bool";
import Principal "mo:base/Principal";
import Types "./Types";
import Result "mo:base/Result";
import HashMap "mo:base/HashMap";
import Blob "mo:base/Blob";
import LedgerIndex "canister:icp_index_canister";

actor {
  stable var transactionId: Types.TransactionId = 0;
  stable var nfts = List.nil<Types.Nft>();
  stable var custodians = List.nil<Principal>(); 
  type MyMintedNft = Types.MyMintedNft;
  let null_address : Principal = Principal.fromText("aaaaa-aa");

  // Mint function
  public shared func mintDip721(to: Principal, metadata: Types.MetadataDesc): async Types.MintReceipt {
    let newId = Nat64.fromNat(List.size(nfts));
    let nft: Types.Nft = {
      owner = to;
      id = newId;
      metadata = metadata;
    };

    nfts := List.push(nft, nfts);
    transactionId += 1;
    return #Ok({
      token_id = newId;
      id = transactionId;
    });
  };

  public shared func getNftsByPrincipal(owner: Principal): async [Types.Nft] {
    let nftArray = List.toArray(nfts); // Convert the stable list to an array
    let filteredArray = Array.filter(nftArray, func(nft: Types.Nft): Bool {
        nft.owner == owner;
    });
    return filteredArray; // Return the filtered array
};

  public shared func ledgerdata(): async Nat64 {
    let current_round = (await LedgerIndex.status()).num_blocks_synced - 1;
    return current_round;

};

};
