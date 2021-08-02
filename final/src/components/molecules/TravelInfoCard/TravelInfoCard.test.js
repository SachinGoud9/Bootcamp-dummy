import { render, screen, cleanup } from '@testing-library/react';
import TravelInfoCard  from './TravelInfoCard';


afterEach(cleanup)

describe('Travelinfocard Rendered', () => {
  test( "maindivintravelinfocard" , () => {
    render(<TravelInfoCard />);
    const element = screen.getByTestId( "maindivintravelinfocard" )
    expect(element).toBeTruthy();
  });
  test("maingridintravelinfocard", () => {
    render(<TravelInfoCard />);
    const element = screen.getByTestId("maingridintravelinfocard")
    expect(element).toBeTruthy();
  });
  test("typographyintravelinfocard" , () => {
    render(<TravelInfoCard  />);
    const element = screen.getByTestId("typographyintravelinfocard")
    expect(element).toBeTruthy();
  });
  test("secondgridintravelinfocard" , () => {
    render(<TravelInfoCard  />);
    const element = screen.getByTestId("secondgridintravelinfocard" )
    expect(element).toBeTruthy();
  });
  test("Appbarintravelinfocard" , () => {
    render(<TravelInfoCard  />);
    const element = screen.getByTestId("Appbarintravelinfocard" )
    expect(element).toBeTruthy();
  });
  test("thirdgridintravelinfocard", () => {
    render(<TravelInfoCard />);
    const element = screen.getByTestId("thirdgridintravelinfocard")
    expect(element).toBeTruthy();
  });
  test("thirdgriditemintravelinfocard", () => {
    render(<TravelInfoCard />);
    const element = screen.getByTestId("thirdgriditemintravelinfocard")
    expect(element).toBeTruthy();
  });
  test("fourthgriditemintravelinfocard", () => {
    render(<TravelInfoCard />);
    const element = screen.getByTestId("fourthgriditemintravelinfocard")
    expect(element).toBeTruthy();
  });
  test("fifthgridintravelinfocard", () => {
    render(<TravelInfoCard />);
    const element = screen.getByTestId("fifthgridintravelinfocard")
    expect(element).toBeTruthy();
  });
  test("sixthgridintravelinfocard", () => {
    render(<TravelInfoCard />);
    const element = screen.getByTestId("sixthgridintravelinfocard")
    expect(element).toBeTruthy();
  });
  test("seventhgridintravelinfocard", () => {
    render(<TravelInfoCard />);
    const element = screen.getByTestId("seventhgridintravelinfocard")
    expect(element).toBeTruthy();
  });
  test("eigthgridintravelinfocard", () => {
    render(<TravelInfoCard />);
    const element = screen.getByTestId("eigthgridintravelinfocard")
    expect(element).toBeTruthy();
  });
  test("firsttypography", () => {
    render(<TravelInfoCard  />);
    const element = screen.getByTestId("firsttypography")
    expect(element).toBeTruthy();
  });
  test("secondtypography", () => {
    render(<TravelInfoCard  />);
    const element = screen.getByTestId("secondtypography")
    expect(element).toBeTruthy();
  });
  test("thirdtypography", () => {
    render(<TravelInfoCard  />);
    const element = screen.getByTestId("thirdtypography")
    expect(element).toBeTruthy();
  });
  test("ninthgridintravelinfocard", () => {
    render(<TravelInfoCard />);
    const element = screen.getByTestId("ninthgridintravelinfocard")
    expect(element).toBeTruthy();
  });
  test("tenthgridintravelinfocard", () => {
    render(<TravelInfoCard />);
    const element = screen.getByTestId("tenthgridintravelinfocard")
    expect(element).toBeTruthy();
  });
  test("fourthtypography" , () => {
    render(<TravelInfoCard  />);
    const element = screen.getByTestId("fourthtypography" )
    expect(element).toBeTruthy();
  });
  test("fifthtypography" , () => {
    render(<TravelInfoCard />);
    const element = screen.getByTestId("fifthtypography" )
    expect(element).toBeTruthy();
  });
  test("elevengridintravelinfocard", () => {
    render(<TravelInfoCard  />);
    const element = screen.getByTestId("elevengridintravelinfocard")
    expect(element).toBeTruthy();
  });
  test("twelthgridintravelinfocard", () => {
    render(<TravelInfoCard  />);
    const element = screen.getByTestId("twelthgridintravelinfocard")
    expect(element).toBeTruthy();
  });
  test("thirteengridintravelinfocard", () => {
    render(<TravelInfoCard />);
    const element = screen.getByTestId("thirteengridintravelinfocard")
    expect(element).toBeTruthy();
  });
  test("fourteengridintravelinfocard", () => {
    render(<TravelInfoCard />);
    const element = screen.getByTestId("fourteengridintravelinfocard")
    expect(element).toBeTruthy();
  });
  test("sixthtypography", () => {
    render(<TravelInfoCard />);
    const element = screen.getByTestId("sixthtypography")
    expect(element).toBeTruthy();
  });
  test( "seventhtypography" , () => {
    render(<TravelInfoCard />);
    const element = screen.getByTestId( "seventhtypography" )
    expect(element).toBeTruthy();
  });
  test( "eigthtypography"  , () => {
    render(<TravelInfoCard />);
    const element = screen.getByTestId( "eigthtypography" )
    expect(element).toBeTruthy();
  });
  test( "fifteengridintravelinfocard", () => {
    render(<TravelInfoCard />);
    const element = screen.getByTestId( "fifteengridintravelinfocard")
    expect(element).toBeTruthy();
  });
  test( "sixteengridintravelinfocard", () => {
    render(<TravelInfoCard />);
    const element = screen.getByTestId( "sixteengridintravelinfocard")
    expect(element).toBeTruthy();
  });
  test( "seventeengridintravelinfocard", () => {
    render(<TravelInfoCard />);
    const element = screen.getByTestId(  "seventeengridintravelinfocard")
    expect(element).toBeTruthy();
  });
  test("ningthtypography" , () => {
    render(<TravelInfoCard />);
    const element = screen.getByTestId("ningthtypography" )
    expect(element).toBeTruthy();
  });
  test( "tenthtypography", () => {
    render(<TravelInfoCard />);
    const element = screen.getByTestId( "tenthtypography" )
    expect(element).toBeTruthy();
  });
});