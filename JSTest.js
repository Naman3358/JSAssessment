/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Create a variable to hold your NFTs
let nftCollection = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, artist, description, dateMinted) {
    // Create an NFT object
    const nft = {
        name: name,
        artist: artist,
        description: description,
        dateMinted: dateMinted
    };
    
    // Store the NFT in the nftCollection array
    nftCollection.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    nftCollection.forEach((nft, index) => {
        console.log(NFT ${index + 1}:);
        console.log(Name: ${nft.name});
        console.log(Artist: ${nft.artist});
        console.log(Description: ${nft.description});
        console.log(Date Minted: ${nft.dateMinted});
        console.log('-------------------------');
    });
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(Total NFTs minted: ${nftCollection.length});
}

// Call your functions below this line
mintNFT("Art Piece 1", "Artist A", "A beautiful landscape painting.", "2023-01-01");
mintNFT("Art Piece 2", "Artist B", "A modern abstract piece.", "2023-02-01");
mintNFT("Art Piece 3", "Artist C", "A classic portrait.", "2023-03-01");

listNFTs();
getTotalSupply();
