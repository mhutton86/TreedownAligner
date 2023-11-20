import * as fs from "fs";

interface CSVRow {
    id: number;
    // Add other fields based on your CSV structure
}

export const tsvContentReader = async (tsvContentStream: ReadableStreamDefaultReader<Uint8Array>) => {
        // Load a TSV file by name
        console.log("tsvContentStream.read()");
        console.log(await tsvContentStream.read());

//
//     const parsedData: CSVRow[] = [];
//     let currentRow = 1;
//     let currentField = '';
//
//     readable.on('data', (chunk) => {
//         console.log(chunk);
//     });
//
//     readable.on('end', () => {
//         console.log('end');
//     });
//
//     while (true) {
//         const {value, done} = await fileStream.read();
//
//         // stop when we're out of content
//         if (done) {
//             break;
//         }
//
//         console.log(value);
        // const chunk = decoder.decode(value, { stream: true });
        //
        // for (let i = 0; i < chunk.length; i++) {
        //     if (chunk[i] === "\r") {
        //         const id = parseInt(currentField, 10);
        //         // Add other field parsing based on your CSV structure
        //
        //         parsedData.push({ id });
        //
        //         // Stop parsing if the row with the specified ID is found
        //         if (parsedData.length > 0 && parsedData[parsedData.length - 1].id === YOUR_SPECIFIED_ID) {
        //             return parsedData;
        //         }
        //
        //         currentField = '';
        //     } else {
        //         currentField += chunk[i];
        //     }
        // }

        // return parsedData;

        // Allow an async way to load a range of lines

        // Provide an map function to pull out content by specified header

}
