// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Harold wants to drag select cells A1 to D7. How can he accomplish this?",
    answer: "B. Select A1 then D7 while pressing shift",
    options: [
      "A. Long press Alt then click A1 then click D7.",
      "B. Select A1 then D7 while pressing shift",
      "C. Type A1:D7 in the formula bar",
      "D. Press Ctrl + A."
    ]
  },
  {
    numb: 2,
    question: "What is the formula that will subtract the contents of the cells A7 to A8?",
    answer: "B. = A7 - A8",
    options: [
      "A. A7 - A8",
      "B. = A7 - A8",
      "C. A7 - A8 =",
      "D. =SUM (A7:A8)"
    ]
  },
  {
    numb: 3,
    question: "How can you create a new tab in Windows Excel?",
    answer: "D. In the lower portion of the work area, press the plus button besides the tabs.",
    options: [
      "A. In the ribbon, select Home>Tabs>Add Tabs then input how many you like to add.",
      "B. Press Ctrl + A then press Ctrl + Shift + n.",
      "C. You can’t add tabs in Microsoft Excel.",
      "D. In the lower portion of the work area, press the plus button besides the tabs."
    ]
  },
  {
    numb: 4,
    question: "How to format a cell that will automatically add a peso sign?",
    answer: "C. In the ribbon, select the Home tab then click Format Cells. In the Number tab, click Currency then in the dropdown box search for the peso sign symbol.",
    options: [
      "A. Select the cell or cells you want to edit then press Insert > Symbol > More Symbols. Scroll down and look for the peso sign then press insert.",
      "B. Select the cell or cells you like to add formatting. Press right click then click Symbol > More Symbols. Scroll down and look for the peso sign then press insert.",
      "C. In the ribbon, select the Home tab then click Format Cells. In the Number tab, click Currency then in the dropdown box search for the peso sign symbol.",
      "D. Select the cell or cells you like to add formatting press right click then Format Cells. Then in the Number tab, click Currency then in the dropdown box search for the peso sign symbol."
    ]
  },
  {
    numb: 5,
    question: "What computer program gives the user the ability to create tables and edit their values?",
    answer: "C. Spreadsheet",
    options: [
      "A. Presentation",
      "B. Word",
      "C. Spreadsheet",
      "D. Outlook"
    ]
  },
  {
    numb: 6,
    question: "Which Ribbon Menu is needed to be selected to change the font?",
    answer: "A. Home",
    options: [
      "A. Home",
      "B. Insert",
      "C. Page Layout",
      "D. Cell Formatting"
    ]
  },
  {
    numb: 7,
    question: "How do you resize a column or width?",
    answer: "D. Click and drag the column or row heading",
    options: [
      "A. Select the cell then press right click, select format cell then change height and width values.",
      "B. In the Formula bar type (h[value]:w[value]).",
      "C. Click the cell then in the ribbon select format cell then change height and width values.",
      "D. Click and drag the column or row heading"
    ]
  },
  {
    numb: 8,
    question: "How do you change formula style in a sheet?",
    answer: "B. Click Home > Format as Table > Table Style",
    options: [
      "A. Click Insert > Cell Formatting > Table Format > Table Style",
      "B. Click Home > Format as Table > Table Style",
      "C. Click Cell Formatting > Format Table > Table Style",
      "D. You have to select each cell then add cell borders to each of them"
    ]
  },
  {
    numb: 9,
    question: "What is the formula that will add the contents of the cells C1 and C10?",
    answer: "B. = C1 + C10",
    options: [
      "A. C1 + C10",
      "B. = C1 + C10",
      "C. C1 + C10 =",
      "D. SUM (C1:C3)"
    ]
  },
  {
    numb: 10,
    question: "Which Ribbon Menu is needed to add a Chart?",
    answer: "B. Insert",
    options: [
      "A. Home",
      "B. Insert",
      "C. Page Layout",
      "D. Cell Formatting"
    ]
  },
  {
    numb: 11,
    question: "How do you resize a graph?",
    answer: "A. Click the graph then click and drag any of the handles on the edges of the graph.",
    options: [
      "A. Click the graph then click and drag any of the handles on the edges of the graph.",
      "B. Select the table then press right click, a window will appear, select the Width change the value desired then select height change the value desired.",
      "C. Select the table then press Ctrl + Arrow Keys.",
      "D. You can’t change the size of graphs."
    ]
  },
  {
    numb: 12,
    question: "How do you rename a graph into “First Data” in Microsoft Excel?",
    answer: "C. Double click the name of the chart and type “First Data”.",
    options: [
      "A. Press right click then select rename, a window will appear then type “First Data”.",
      "B. Press Ctrl + A then Ctrl + R, rename the chart to “First Data”",
      "C. Double click the name of the chart and type “First Data”.",
      "D. Graph names can’t be changed as they follow the name from the selected data"
    ]
  },
  {
    numb: 13,
    question: "What is the purpose of the Formula Bar?",
    answer: "A. It allows an easy-to-see input box for formula in a cell",
    options: [
      "A. It allows an easy-to-see input box for formula in a cell",
      "B. It is a selection of shortcuts for different formulas in Microsoft Excel",
      "C. It is the formula that allows computation of values from different cells.",
      "D. The Formula Bar is a label below the cell that indicates the result of a formula"
    ]
  },
  {
    numb: 14,
    question: "How do you assign which cell the formula = (A1 + A2) + A3 will be displayed on?",
    answer: "D. Type the formula where you want it to be displayed on.",
    options: [
      "A. On the formula bar type cell address",
      "B. Press right click then select Cell Format then click on the Formula tab, type which cell you want that formula will be displayed",
      "C. Click Cell Formatting then select the formula then type where it will be displayed.",
      "D. Type the formula where you want it to be displayed on."
    ]
  },
  {
    numb: 15,
    question: "With this formula = Expense!C12, what does the Expense! part mean?",
    answer: "C. It indicates that the C12 to be displayed is on the sheet Expense",
    options: [
      "A. It a variable that allows quick reference of a value.",
      "B. It is a formula label, allowing the user to manage all the formula.",
      "C. It indicates that the C12 to be displayed is on the sheet Expense",
      "D. This is not a proper use of the formula."
    ]
  },
];
