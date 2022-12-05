import React from 'react';
import "./../css/home.css"
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  ListInput,
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardContent,
  Chip,
  Icon,
  Toggle,
  Checkbox
} from 'framework7-react';

const warehouse = [
  "110-San Jose",
  "111-Milpitas",
  "112-Lincoln",
  "115-San Diego",
  "116-Advanced Foam Packaging",
  "117-Livermore",
  "120-Orange County",
  "125-Robertsdale",
  "130-Tualatin",
  "132-Tigard",
  "136-Redmond",
  "145-Tech Ridge",
  "147-Round Rock",
  "150-Houston",
]

const tblResults = [
  {
    partNo: "D000000",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia vitae velit non convallis",
    site: "110-San Jose",
    revision: "1.0",
    cost: 250.00,
    laborTime: 10,
    validated: "XXXXXX",
    modified: new Date(2022, 11, 7),
    notes: "Lorem ipsum dolor sit amet",
    inStock: true
  },
  {
    partNo: "D000000",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia vitae velit non convallis",
    site: "110-San Jose",
    revision: "1.0",
    cost: 570.00,
    laborTime: 10,
    validated: "XXXXXX",
    modified: new Date(2022, 10, 29),
    notes: "Lorem ipsum dolor sit amet",
    inStock: true
  },
  {
    partNo: "D000000",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia vitae velit non convallis",
    site: "110-San Jose",
    revision: "1.0",
    cost: 570.00,
    laborTime: 10,
    validated: "XXXXXX",
    modified: new Date(2022, 10, 29),
    notes: "Lorem ipsum dolor sit amet",
    inStock: true
  },
  {
    partNo: "D000010",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia vitae velit non convallis",
    site: "110-San Jose",
    revision: "2.0",
    cost: 350.00,
    laborTime: 10,
    validated: "XXXXXX",
    modified: new Date(2022, 7, 29),
    notes: "Lorem ipsum dolor sit amet",
    inStock: true
  },
  {
    partNo: "D000010",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia vitae velit non convallis",
    site: "110-San Jose",
    revision: "1.0",
    cost: 570.00,
    laborTime: 10,
    validated: "XXXXXX",
    modified: new Date(2022, 10, 31),
    notes: "Lorem ipsum dolor sit amet",
    inStock: true
  },
  {
    partNo: "D000300",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia vitae velit non convallis",
    site: "110-San Jose",
    revision: "1.0",
    cost: 570.00,
    laborTime: 10,
    validated: "XXXXXX",
    modified: new Date(2022, 11, 2),
    notes: "Lorem ipsum dolor sit amet",
    inStock: true
  },
  {
    partNo: "D000100",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia vitae velit non convallis",
    site: "110-San Jose",
    revision: "1.0",
    cost: 570.00,
    laborTime: 10,
    validated: "XXXXXX",
    modified: new Date(2022, 10, 29),
    notes: "Lorem ipsum dolor sit amet",
    inStock: true
  },
  {
    partNo: "D000052",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia vitae velit non convallis",
    site: "110-San Jose",
    revision: "1.0",
    cost: 570.00,
    laborTime: 10,
    validated: "XXXXXX",
    modified: new Date(2022, 10, 29),
    notes: "Lorem ipsum dolor sit amet",
    inStock: true
  }
];


const tblResults2 = [
  {
    partNo: "D000000",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia vitae velit non convallis",
    revision: "1.0",
    laborTime: 10,
    validated: "XXXXXX",
    modified: new Date(2022, 11, 7),
    notes: "Lorem ipsum dolor sit amet",
    inStock: true,
    target: 0,
    margin: 48,
    qty: 2,
    totalMat: 600,
    totalCost: 880,
    unitSelling: 1302.4,
    totalPrice: 2604.8
  },
  {
    partNo: "D000001",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia vitae velit non convallis",
    revision: "1.0",
    laborTime: 10,
    validated: "XXXXXX",
    modified: new Date(2022, 29, 10),
    notes: "Lorem ipsum dolor sit amet",
    inStock: true,
    target: 0,
    margin: 48,
    qty: 5,
    totalMat: 650,
    totalCost: 1340,
    unitSelling: 1983.2,
    totalPrice: 9916
  },
  {
    partNo: "D000002",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia vitae velit non convallis",
    revision: "1.0",
    laborTime: 10,
    validated: "XXXXXX",
    modified: new Date(2022, 29, 10),
    notes: "Lorem ipsum dolor sit amet",
    inStock: true,
    target: 0,
    margin: 48,
    qty: 3,
    totalMat: 500,
    totalCost: 1050,
    unitSelling: 1554,
    totalPrice: 4662
  },
  {
    partNo: "D000003",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia vitae velit non convallis",
    revision: "1.0",
    laborTime: 10,
    validated: "XXXXXX",
    modified: new Date(2022, 29, 10),
    notes: "Lorem ipsum dolor sit amet",
    inStock: true,
    target: 1900,
    margin: 32.867,
    qty: 1,
    totalMat: 370,
    totalCost: 1430,
    unitSelling: 1900,
    totalPrice: 1900.00
  }
]
const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar sliding={true}>
      <NavLeft>
        <img src="assets/logo-tpk.png" width="150" height="53" />
      </NavLeft>
      <NavTitle></NavTitle>
      <NavRight>
        <Link>Welcome, Enrique L</Link>
      </NavRight>
    </Navbar>


    <Page>
      <Block inset={true}>
        <Card>
          <CardHeader>
            <span className='gl-color'>Search options</span>
          </CardHeader>
          <CardContent>
            <Row>
              <Col width={35}>
                <List inset={true} className="lc-organized">
                  {/* <ListItem className='gl-noAfter'>
                    <span className='item-label gl-noAfter'>CM PN (Max. 10 items)</span>
                  </ListItem> */}
                  <ListInput
                    label="CM PN (Max. 10 items)"
                    type="text"
                    clearButton
                    placeholder="Crate Maker PN"
                  >
                  </ListInput>
                  <Chip text="Add" slot='list' style={{ "transform": "translateY(50%)" }} className='lc-btnAdd' />

                  {/* <ListItem> */}

                  {/* <Chip text="Add" slot='list'/> */}
                  {/* </ListItem> */}
                  {/* <Toggle slot="after"></Toggle> */}

                  {/* <ListItem title="CM PN (Max. 10 items)">
                    <Chip text="Add" slot='after' />
                    <span slot='list'>ddss</span>
                  </ListItem> */}
                  {/* <Chip text="Add" slot='after' /> */}
                  {/* </ListItem> */}
                </List>
              </Col>
              <Col width={65}></Col>
            </Row>

            <Row>
              <Col width={35}>
                <List inset={true} className={'lc-organized'}>
                  <ListInput
                    label="Sage PN (Max. 10 items)"
                    type="text"
                    clearButton
                    placeholder="Sage PN"
                  >
                  </ListInput>
                  <Chip text="Add" slot='list' style={{ "transform": "translateY(50%)" }} className='lc-btnAdd' />
                </List>
              </Col>
              <Col width={65}>
                <List inset={true} className="margin-left">
                  <Chip text="Add" slot='list' style={{ "transform": "translateY(50%)" }} className='gl-mx-2' />
                </List>
              </Col>
            </Row>

            <Row>
              <Col width={35}>
                <List inset={true} className="lc-organized">
                  <ListInput
                    label="Customer PN (Max. 10 items)"
                    type="text"
                    clearButton
                    placeholder="Customer PN"
                  >
                  </ListInput>
                  <Chip text="Add" slot='list' style={{ "transform": "translateY(50%)" }} className='lc-btnAdd' />
                </List>
              </Col>
              <Col width={65}></Col>
            </Row>
            <Row>
              <Col width={100}>
                <ListItem className='gl-mx-3 lc-select' title="Site" smartSelect={true} smartSelectParams={{ openIn: 'popup', searchbar: true, searchbarPlaceholder: 'Search Site' }}>
                  <select name="site" multiple={true}>
                    {warehouse.map((x, i) => (<option value={i} key={i}>{x}</option>))}
                  </select>
                </ListItem>
              </Col>
            </Row>

            <Row>
              <Col width={100} className="display-flex justify-content-center">
                <Button fill>Search</Button>
              </Col>
            </Row>
          </CardContent>
        </Card>

        <Card className="data-table data-table-init">
          <CardHeader>
            <span className='gl-color'>Search results</span>
          </CardHeader>
          <table>
            <thead>
              <tr>
                <th className="checkbox-cell">
                  <Checkbox />
                </th>
                <th className="label-cell text-align-center">Part Number</th>
                <th className="label-cell text-align-center">Description</th>
                <th className="label-cell text-align-center">Site</th>
                <th className="numeric-cell text-align-center">Rev</th>
                <th className="numeric-cell text-align-center">Material cost</th>
                <th className="numeric-cell text-align-center">Labor time</th>
                <th className="label-cell text-align-center">Validated (Sage PN)</th>
                <th className="label-cell text-align-center">Modified date</th>
                <th className="label-cell text-align-center">Notes</th>
                <th className="numeric-cell text-align-center">In stock</th>
                <th className="label-cell text-align-center">Attachments</th>
              </tr>
            </thead>
            <tbody>
              {tblResults.map((x, i) => (
                <tr key={i}>
                  <td className="checkbox-cell">
                    <Checkbox />
                  </td>
                  <td className="label-cell text-align-center">{x.partNo}</td>
                  <td className="label-cell text-align-center">{x.description}</td>
                  <td className="label-cell text-align-center">{x.site}</td>
                  <td className="numeric-cell text-align-center">{x.revision}</td>
                  <td className="numeric-cell text-align-center">${x.cost}</td>
                  <td className="numeric-cell text-align-center">{x.laborTime}</td>
                  <td className="label-cell text-align-center">{x.validated}</td>
                  <td className="label-cell text-align-center">{x.modified.toLocaleDateString()}</td>
                  <td className="label-cell text-align-center">{x.notes}</td>
                  <td className="checkbox-cell text-align-center"> <Checkbox defaultValue={x.inStock} /></td>
                  <td className="label-cell text-align-center">3 - View</td>
                </tr>
              ))}

            </tbody>
          </table>
        </Card>

        <Block strong inset>
          <Button fill>Search</Button>
        </Block>

        <Card className="data-table data-table-init">
          <CardHeader>
            <span className='gl-color'>Search results</span>
          </CardHeader>
          <table>
            <thead>
              <tr>
                <th className="checkbox-cell">
                  <Checkbox />
                </th>
                <th className="label-cell text-align-center">Part Number</th>
                <th className="label-cell text-align-center">Description</th>
                <th className="numeric-cell text-align-center">Rev</th>
                <th className="numeric-cell text-align-center">Labor time</th>
                <th className="label-cell text-align-center">Validated (Sage PN)</th>
                <th className="label-cell text-align-center">Modified date</th>
                <th className="label-cell text-align-center">Notes</th>
                <th className="numeric-cell text-align-center">In stock</th>
                <th className="label-cell text-align-center">Attachments</th>
                <th className="label-cell text-align-center">Target price</th>
                <th className="label-cell text-align-center">Gross margin %</th>
                <th className="label-cell text-align-center">Qty</th>
                <th className="label-cell text-align-center">Total mat cost</th>
                <th className="label-cell text-align-center">Total cost</th>
                <th className="label-cell text-align-center">Unit selling price</th>
                <th className="label-cell text-align-center"><strong>Total price</strong></th>
              </tr>
            </thead>
            <tbody>
              {tblResults2.map((x, i) => (
                <tr key={i}>
                  <td className="checkbox-cell">
                    <Checkbox />
                  </td>
                  <td className="label-cell text-align-center">{x.partNo}</td>
                  <td className="label-cell text-align-center gl-color">Read</td>
                  <td className="numeric-cell text-align-center">{x.revision}</td>
                  <td className="numeric-cell text-align-center">{x.laborTime}</td>
                  <td className="label-cell text-align-center">{x.validated}</td>
                  <td className="label-cell text-align-center">{x.modified.toLocaleDateString()}</td>
                  <td className="label-cell text-align-center gl-color">Read</td>
                  <td className="checkbox-cell text-align-center">
                    <Checkbox defaultValue={x.inStock} />
                  </td>
                  <td className="label-cell text-align-center">3 - View</td>
                  <td className="input-cell text-align-center"> <div className="input" style={{ width: '50px' }}>
                    <input type="number" placeholder="Filter" value={x.target} />
                  </div></td>
                  <td className="input-cell text-align-center">< div className="input" style={{ width: '50px' }}>
                    <input type="number" placeholder="Filter" value={x.margin} />
                  </div></td>
                  <td className="input-cell text-align-center"> <div className="input" style={{ width: '50px' }}>
                    <input type="number" placeholder="Filter" value={x.qty} />
                  </div></td>
                  <td className="numeric-cell text-align-center">{x.totalCost}</td>
                  <td className="numeric-cell text-align-center">{x.totalCost}</td>
                  <td className="numeric-cell text-align-center">{x.unitSelling}</td>
                  <td className="numeric-cell text-align-center">{x.totalPrice}</td>
                </tr>
              ))}

            </tbody>
          </table>
        </Card>
      </Block>
    </Page>
  </Page >
);
export default HomePage;