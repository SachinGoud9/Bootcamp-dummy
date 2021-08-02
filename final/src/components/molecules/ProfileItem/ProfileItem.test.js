import { render, screen, cleanup } from '@testing-library/react';
import ProfileItem from './ProfileItem';




describe('Typography Rendered', () => {
    test('divinprofileitem', () => {
      render(<ProfileItem/>);
      const element = screen.getByTestId('divinprofileitem')
      expect(element).toBeTruthy();
    });
    test('listiteminprofileitem', () => {
      render(<ProfileItem/>);
      const element = screen.getByTestId('listiteminprofileitem')
      expect(element).toBeTruthy();
    });
    test('listitemiconinprofileitem', () => {
      render(<ProfileItem/>);
      const element = screen.getByTestId('listitemiconinprofileitem')
      expect(element).toBeTruthy();
    });
    test('messageinprofileitem', () => {
      render(<ProfileItem/>);
      const element = screen.getByTestId('messageinprofileitem')
      expect(element).toBeTruthy();
    });
    test('listitem1inprofileitem', () => {
      render(<ProfileItem/>);
      const element = screen.getByTestId('listitem1inprofileitem')
      expect(element).toBeTruthy();
    });
    test('notifiinprofileitem', () => {
      render(<ProfileItem/>);
      const element = screen.getByTestId('notifiinprofileitem')
      expect(element).toBeTruthy();
    });
    test('avatarinprofileitem', () => {
      render(<ProfileItem/>);
      const element = screen.getByTestId('avatarinprofileitem')
      expect(element).toBeTruthy();
    });
    test('myimageinprofileitem', () => {
      render(<ProfileItem/>);
      const element = screen.getByTestId('myimageinprofileitem')
      expect(element).toBeTruthy();
    });
    test('textinprofileitem', () => {
      render(<ProfileItem/>);
      const element = screen.getByTestId('textinprofileitem')
      expect(element).toBeTruthy();
    });
    test('sareinprofileitem', () => {
      render(<ProfileItem/>);
      const element = screen.getByTestId('sareinprofileitem')
      expect(element).toBeTruthy();
    });
    test('itemiconinprofileitem', () => {
      render(<ProfileItem/>);
      const element = screen.getByTestId('itemiconinprofileitem')
      expect(element).toBeTruthy();
    });
    test('keyinprofileitem', () => {
      render(<ProfileItem/>);
      const element = screen.getByTestId('keyinprofileitem')
      expect(element).toBeTruthy();
    });
  });