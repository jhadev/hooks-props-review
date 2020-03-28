const info = [
  {
    variantColor: 'cyan',
    fontWeight: 'bold',
    fontSize: '4xl',
    text:
      'This shows the flow of props and state from parent to child to grandchild.'
  },
  {
    fontWeight: 'bold',
    fontSize: '2xl',
    text:
      "If the parent's last name changes, it will be reflected in both the child and the grandchild.",
    as: 'i'
  },
  {
    fontWeight: 'bold',
    fontSize: '2xl',
    text:
      "If the child's last name changes it will be reflected in the grandchild but will not change the parent's last name.",
    as: 'i'
  },
  {
    fontWeight: 'bold',
    fontSize: '2xl',
    text:
      "If the grandchild's last name changes it will not change the child or the parent's last name.",
    as: 'i'
  }
];

export default info;
