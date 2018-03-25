import { IBook } from "../model/book";

export class Constant {
    public static API_GET_DATA : string = "http://www.mocky.io/v2/5ab513a0300000b01e8278b7";
    public static DATA : IBook[] = [
        {
            id: 0,
            name: "Hoa vàng trên cỏ xanh",
            author: "Nguyễn Nhật Ánh",
            price: 230000,
            releasedate: 1351898359221,
            genre: "Thanh xuân"
        },
        {
            id: 1,
            name: "Lược sử thời gian",
            author: "Stephen Hawking",
            price: 200000,
            releasedate: 1426898359221,
            genre: "Khoa học vũ trụ"
        },
        {
            id: 2,
            name: "Harry potter and Half-blood prince",
            author: "J. K. Rowling",
            price: 560000,
            releasedate: 1301898359221,
            genre: "Phiêu lưu"
        }
    ]
    public static MY_DATE_FORMATS = {
        parse: {
            dateInput: {month: 'short', year: 'numeric', day: 'numeric'}
        },
        display: {
            // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
            dateInput: 'input',
            monthYearLabel: {year: 'numeric', month: 'short'},
            dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
            monthYearA11yLabel: {year: 'numeric', month: 'long'},
        }
    };
}