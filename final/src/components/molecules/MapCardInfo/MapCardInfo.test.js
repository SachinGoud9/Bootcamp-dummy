import { render, screen, cleanup } from '@testing-library/react';
import JobCardInfo from './MapCardInfo';


describe('Typography Rendered', () => {
    test('maingridinmapcard', () => {
      render(<JobCardInfo/>);
      const element = screen.getByTestId('maingridinmapcard')
      expect(element).toBeTruthy();
    });
    test('firsgridinmapcard', () => {
      render(<JobCardInfo/>);
      const element = screen.getByTestId('firsgridinmapcard')
      expect(element).toBeTruthy();
    });
    test('arrowbackinmapcard', () => {
      render(<JobCardInfo/>);
      const element = screen.getByTestId('arrowbackinmapcard')
      expect(element).toBeTruthy();
    });
    test('commuteroutesinmapcard', () => {
      render(<JobCardInfo/>);
      const element = screen.getByTestId('commuteroutesinmapcard')
      expect(element).toBeTruthy();
    });
    test('2fridinmapcard', () => {
      render(<JobCardInfo/>);
      const element = screen.getByTestId('2fridinmapcard')
      expect(element).toBeTruthy();
    });
    test('myimageinmapcard', () => {
      render(<JobCardInfo/>);
      const element = screen.getByTestId('myimageinmapcard')
      expect(element).toBeTruthy();
    });
    test('3rdgridinmapcard', () => {
      render(<JobCardInfo/>);
      const element = screen.getByTestId('3rdgridinmapcard')
      expect(element).toBeTruthy();
    });
    test('fourthgridinmapcard', () => {
      render(<JobCardInfo/>);
      const element = screen.getByTestId('fourthgridinmapcard')
      expect(element).toBeTruthy();
    });
    test('5thgridinmapcard', () => {
      render(<JobCardInfo/>);
      const element = screen.getByTestId('5thgridinmapcard')
      expect(element).toBeTruthy();
    });
    test('manualinmapcard', () => {
      render(<JobCardInfo/>);
      const element = screen.getByTestId('manualinmapcard')
      expect(element).toBeTruthy();
    });
    test('srclocationinmapcard', () => {
      render(<JobCardInfo/>);
      const element = screen.getByTestId('srclocationinmapcard')
      expect(element).toBeTruthy();
    });
    test('6thgridinmapcard', () => {
      render(<JobCardInfo/>);
      const element = screen.getByTestId('6thgridinmapcard')
      expect(element).toBeTruthy();
    });
    test('7thgridinmapcard', () => {
      render(<JobCardInfo/>);
      const element = screen.getByTestId('7thgridinmapcard')
      expect(element).toBeTruthy();
    });
    test('roominmapcard', () => {
      render(<JobCardInfo/>);
      const element = screen.getByTestId('roominmapcard')
      expect(element).toBeTruthy();
    });
    test('destlocationinmapcard', () => {
      render(<JobCardInfo/>);
      const element = screen.getByTestId('destlocationinmapcard')
      expect(element).toBeTruthy();
    });
  });