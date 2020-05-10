import Colors from '../globals/colors';

export default buttons = {
  fullWidthButton: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: Colors.linkButtonColor,
  },
  defaultButton: {
    alignSelf: 'center',
    backgroundColor: Colors.linkButtonColor,
    minWidth: 104
  },
  redButton: {
    alignSelf: 'center',
    minWidth: 104
  },
  fullWidthButtonTitle: {
    fontSize: 16,
    fontFamily: 'Avenir-Black',
    fontWeight: '600',
  },
  inlineXButton: {
    marginRight: 16,
    color: Colors.warningButtonColor
  }
}
