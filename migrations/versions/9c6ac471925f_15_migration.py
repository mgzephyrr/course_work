"""15 migration

Revision ID: 9c6ac471925f
Revises: 2dcbe0eec25c
Create Date: 2024-04-10 01:13:58.596495

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '9c6ac471925f'
down_revision: Union[str, None] = '2dcbe0eec25c'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('avatar_file_name', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'avatar_file_name')
    # ### end Alembic commands ###